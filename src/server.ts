import app from './app';
import config from './config/config';
import connectDB from './config/database';
import logger from './utils/logger';

const startServer = async () => {
  try {
    await connectDB();

    app.listen(config.port, () => {
      logger.info(`Server running on http://${config.host}:${config.port}`, {
        context: `Server NodeJS ${process.pid}`,
      });
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
