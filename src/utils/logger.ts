import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { NODE_ENV } from '../config/constants';

class Logger {
  private static instance: Logger;
  private logger: winston.Logger;

  private constructor() {
    const format = winston.format.printf(
      ({ level, message, context, requestId, timestamp, data }) =>
        `${timestamp}: ${level}: ${context}: ${requestId}: ${message}: ${
          data ? JSON.stringify(data, null, 2) : ''
        }`,
    );

    this.logger = winston.createLogger({
      level: NODE_ENV === 'production' ? 'info' : 'debug',
      format: winston.format.combine(winston.format.timestamp(), format),
      transports: [
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
        this.createRotateFileTransport('info'),
        this.createRotateFileTransport('error'),
      ],
    });
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private createRotateFileTransport(level: string): DailyRotateFile {
    return new DailyRotateFile({
      dirname: 'src/logs',
      filename: `application-%DATE%.${level}.log`,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '1kb',
      maxFiles: '14d',
      level,
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
