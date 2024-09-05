module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/src/tests/e2e/setup.ts'],
  testMatch: ['**/tests/e2e/**/*.test.ts'],
};
