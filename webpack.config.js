require('@babel/register')

const webpackMerge = require('webpack-merge')

const ENVS = {
  development: 'dev',
  production: 'prod',
}

const env = ENVS[process.env.NODE_ENV || 'development']
const commonConfig = require('./config/webpack/webpack.common.babel')

/* eslint-disable global-require,import/no-dynamic-require */
const config = require(`./config/webpack/webpack.${env}.babel`)

module.exports = webpackMerge(commonConfig, config)
