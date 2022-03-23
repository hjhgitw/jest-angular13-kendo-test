const jestConfig = {
  preset: 'jest-preset-angular/presets/defaults-esm',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
      stringifyContentPathRegex: '\\.(html|svg)$',
      tsconfig: '<rootDir>/tsconfig-esm.spec.json',
    },
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)',
  '<rootDir>/node_modules/(?!.*tslib.es6.js$)'
],
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',
  },
  globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: {
    //tslib: 'tslib/tslib.mjs',
    //tslib: 'tslib/tslib.es6.js',
    "@shared/(.*)": "<rootDir>/src/app/shared/$1",
    "@editors/(.*)": "<rootDir>/src/app/editors/$1",
    "@dashboard/(.*)": "<rootDir>/src/app/dashboard/$1",
    "@env": "<rootDir>/src/environments/environment",
  },
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest-esm.ts',
  ],
}

export default jestConfig;
