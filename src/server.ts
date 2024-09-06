import app from './app';
import config from './config/config';
import connectDB from './config/database';
import logger from './utils/logger';

const startServer = async () => {
  try {
    await connectDB();

    app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port}`, {
        data: {
          host: 'http://localhost',
          port: config.port,
        },
        context: '/src/server.ts',
        requestId: '1234567890',
        timestamp: new Date().toISOString(),
      });
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
