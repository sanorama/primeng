// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coverageReporters: ['lcov', 'clover', 'text', 'text-summary'],
  clearMocks: true,
};
