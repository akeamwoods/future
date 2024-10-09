export default {
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.app.json',
      },
    ],
  },
  moduleNameMapper: {
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@api$': '<rootDir>/src/api',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@components$': '<rootDir>/src/components',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@hooks$': '<rootDir>/src/hooks',
    '^@test/(.*)$': '<rootDir>/src/test/$1',
    '^@test$': '<rootDir>/src/test',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '^@types$': '<rootDir>/src/types',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@utils$': '<rootDir>/src/utils',
    '^@views/(.*)$': '<rootDir>/src/views/$1',
    '^@views$': '<rootDir>/src/views',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },

  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
