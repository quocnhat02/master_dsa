import cron from 'node-cron';
import User from '../models/User';
import logger from '../utils/logger';

const RETENTION_PERIOD_DAYS = 90;

const anonymizeInactiveUsers = async () => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - RETENTION_PERIOD_DAYS);

  try {
    const result = await User.updateMany(
      {
        isActive: false,
        deactivatedAt: { $lt: cutoffDate },
      },
      {
        $set: {
          name: 'Anonymous User',
          email: `anonymous_${Date.now()}@example.com`,
          password: 'anonymized',
        },
      },
    );

    logger.info(`Anonymized ${result.modifiedCount} inactive user records`);
  } catch (error) {
    logger.error('Error in data retention job:', error);
  }
};

// Run job every day at midnight
cron.schedule('0 0 * * *', anonymizeInactiveUsers);
