const config = require('./jest.config')
config.testRegex = '(/__tests__/.*|(\\.|/)(spec))\\.ts?$'
module.exports = config
