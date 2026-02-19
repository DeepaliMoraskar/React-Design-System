module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testRegex: '(/.*\\.test)\\.(ts|tsx)$',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

 
  // Transform all TS/TSX files with ts-jest
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }]
  },

  moduleNameMapper: {
    // 👈 Point to source, NOT compiled lib
    '^@react.ds/foundation$': '<rootDir>/../foundation/src/index.ts'
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // transform: {
  //   '^.+\\.(ts|tsx)$': ['ts-jest', {
  //     tsconfig: '<rootDir>/tsconfig.json'
  //   }]
  // }
}