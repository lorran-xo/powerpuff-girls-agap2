module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  roots: ['<rootDir>/src/__tests__'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.svg$': '<rootDir>/src/__tests__/__mocks__/svgrMock.ts',
    '\\.(svg|gif)$': '<rootDir>/src/__tests__/__mocks__/svgrMock.ts',
    '\\.css$': '<rootDir>/src/__tests__/__mocks__/styleMock.ts',
  },
  testPathIgnorePatterns: ['/node_modules/', '__tests__/test-utils.tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
