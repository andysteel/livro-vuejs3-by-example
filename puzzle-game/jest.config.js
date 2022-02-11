module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  setupFiles: [
    'jest-localstorage-mock'
  ],
  roots: [
    '<rootDir>/src'
  ],
  modulePaths: [
    '<rootDir>/src'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ]
}
