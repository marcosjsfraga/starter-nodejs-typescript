export default {
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  setupFilesAfterEnv: ['./src/config/jest.setup.ts'],
  // globalSetup: './src/config/jest.global.setup.ts',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.tests.ts'],
}
