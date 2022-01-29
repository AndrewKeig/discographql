/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const slsw = require('serverless-webpack')
const CopyPlugin = require('copy-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const isLocal = slsw.lib.webpack.isLocal

module.exports = {
  mode: isLocal ? 'development' : 'production',
  devtool: isLocal ? 'source-map' : false,
  entry: slsw.lib.entries,
  target: 'node',
  resolve: {
    extensions: ['.mjs', '.ts', '.js'],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/schema.graphql',
          to: 'src/schema.graphql',
        },
      ],
    }),
  ],
}
