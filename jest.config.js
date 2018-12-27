module.exports = {
  globals: {
    __TS_CONFIG__: {
      target: 'es6',
      module: 'commonjs',
      moduleResolution: 'node'
    },
    'ts-jest': {
      tsConfigFile: 'test/tsconfig.spec.json',
    },
    __TRANSFORM_HTML__: true,
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  //'preset': 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/test/setupJest.ts',
  transform: {
    '^.+\\.(ts|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  collectCoverageFrom: [
    'src/app/*.{ts}',
    'src/app/**/*.{ts}',
    'src/app/language/*.{ts}',
    '!src/app/**/*.module.{ts}',
    '!src/*.{ts}',
    '!src/*.{js}',
    '!src/common/entities/**/*.{ts}',
    '!**/*.module.{ts}',
    'src/common/**/*.{ts}',
    'src/modules/**/*.{ts}',
    '**/*.modules.{ts}',
    '!**/*.interface.{ts}',
    '!**/state/*.{ts}',
    '!**/*.entity.{ts}',
    '!**/test.{ts}',
    '!**/app-init.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/out-tsc/', 'src/app/*.{js}'],
  testResultsProcessor: 'jest-sonar-reporter',
  moduleNameMapper: {
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@state/(.*)": "<rootDir>/src/state/$1",
    "@assets/(.*)": "<rootDir>/src/assets/$1",
    "@env/(.*)": "<rootDir>/src/env/$1",
    "@modules/(.*)": "<rootDir>/src/modules/$1",
    "@common/(.*)": "<rootDir>/src/common/$1",
  }
};
