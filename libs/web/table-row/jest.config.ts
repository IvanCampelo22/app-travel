/* eslint-disable */
export default {
  displayName: 'web-table-row',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } }
    ]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/web/table-row'
}
