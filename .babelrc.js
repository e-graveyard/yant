const path = require('path')

module.exports = {
  presets: [
    '@babel/preset-flow',
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    /* module-resolver */
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: [path.resolve('./')],
        alias: {
          '@yant': './src',
        }
      },
    ]
    /* end */
  ],
}
