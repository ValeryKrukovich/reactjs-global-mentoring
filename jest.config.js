const { defaults } = require('jest-config');

module.exports = {
    moduleFileExtensions: defaults.moduleFileExtensions,
    moduleDirectories: ['node_modules', 'src'],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/packages/.+/dist/', // ignore symlink packages
    ],
};
