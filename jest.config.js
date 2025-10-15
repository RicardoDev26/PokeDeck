module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@expo)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|ttf|otf)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
