/* eslint-disable */
export default {
  displayName: 'web-quantity-input',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } }
    ]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/web/quantity-input'
}
