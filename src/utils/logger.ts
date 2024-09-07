import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { NODE_ENV } from '../config/constants';
import { v4 as uuidv4 } from 'uuid';

class Logger {
  private static instance: Logger;
  private logger: winston.Logger;

  private constructor() {
    const format = winston.format.printf(
      ({ level, message, context, requestId, timestamp, data }) => {
        const logParts = [
          timestamp,
          level.toUpperCase(),
          context || '-',
          requestId || uuidv4(),
          message,
        ];

        if (data) {
          logParts.push(JSON.stringify(data));
        }

        return logParts.join(' | ');
      },
    );

    this.logger = winston.createLogger({
      level: NODE_ENV === 'production' ? 'info' : 'debug',
      format: winston.format.combine(winston.format.timestamp(), format),
      transports: [
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
        this.createRotateFileTransport('info', format),
        this.createRotateFileTransport('error', format),
      ],
    });
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private createRotateFileTransport(
    level: string,
    formatPrint: winston.Logform.Format,
  ): DailyRotateFile {
    return new DailyRotateFile({
      dirname: 'src/logs',
      filename: `application-%DATE%.${level}.log`,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '1kb',
      maxFiles: '14d',
      level,
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        formatPrint,
      ),
    });
  }

  private log(level: string, message: string, meta?: object): Logger {
    this.logger.log(level, message, meta);
    return this;
  }

  public info(message: string, meta?: object): Logger {
    return this.log('info', message, meta);
  }

  public error(message: string, meta?: object): Logger {
    return this.log('error', message, meta);
  }

  public warn(message: string, meta?: object): Logger {
    return this.log('warn', message, meta);
  }

  public debug(message: string, meta?: object): Logger {
    return this.log('debug', message, meta);
  }
}

export default Logger.getInstance();
