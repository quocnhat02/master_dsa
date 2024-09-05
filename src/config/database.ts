import mongoose from 'mongoose';
import { MONGODB_URI } from './constants';
import logger from '../utils/logger';

class Database {
  private static instance: Database;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    if (mongoose.connection.readyState === 1) {
      logger.info('MongoDB already connected');
      return;
    }

    try {
      await mongoose.connect(MONGODB_URI);
      logger.info('MongoDB connected');
    } catch (error) {
      logger.error('MongoDB connection error:', error);
      process.exit(1);
    }
  }
}

const connectDB = async (): Promise<void> => {
  await Database.getInstance().connect();
};

export default connectDB;
