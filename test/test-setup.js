require('babel-register')()
require('jsdom-global/register')
require('babel-polyfill')
const Adapter = require('enzyme-adapter-react-16')
const { configure } = require('enzyme')

process.env.NODE_ENV = 'test'

configure({ adapter: new Adapter() })
