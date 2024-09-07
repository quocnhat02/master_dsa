import cron from 'node-cron';
import redisService from '../services/redis.service';

const RETENTION_PERIOD_DAYS = 90;
const LOCK_KEY = 'data_retention_job_lock';
const LOCK_TTL = 60 * 60; // 1 hour in seconds

const acquireLock = async (): Promise<boolean> => {
  return (await redisService.set(LOCK_KEY, 'locked', LOCK_TTL)) === 'OK';
};

const releaseLock = async (): Promise<void> => {
  await redisService.del(LOCK_KEY);
};

// const anonymizeInactiveUsers = async () => {
//   const hasLock = await acquireLock();
//   if (!hasLock) {
//     logger.info('Data retention job is already running on another instance');
//     return;
//   }

//   try {
//     const cutoffDate = new Date();
//     cutoffDate.setDate(cutoffDate.getDate() - RETENTION_PERIOD_DAYS);

//     const result = await User.updateMany(
//       {
//         usr_status: false,
//         usr_deactivated_at: { $lt: cutoffDate },
//       },
//       {
//         $set: {
//           name: 'Anonymous User',
//           email: `anonymous_${Date.now()}@example.com`,
//           password: 'anonymized',
//         },
//       },
//     );

//     logger.info(`Anonymized ${result.modifiedCount} inactive user records`);
//   } catch (error) {
//     logger.error('Error in data retention job:', error);
//   } finally {
//     await releaseLock();
//   }
// };

// // Run job every day at midnight
// cron.schedule('0 0 * * *', anonymizeInactiveUsers);
