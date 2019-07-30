const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

require('babel-polyfill');

configure({ adapter: new Adapter() });

global.fetch = require('jest-fetch-mock');
global.alert = jest.fn();

