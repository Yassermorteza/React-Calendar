
module.exports = {
	coveragePathIgnorePatterns: [
		'<rootDir>/src/index',
		'node_modules'
	],
	collectCoverageFrom: [
		'src/**/*.{js,jsx}'
	],
	collectCoverage: false,
	coverageDirectory: "coverage",
	rootDir: './',
	setupFiles: [
		'<rootDir>/setupTest.js',
	],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.js?(x)',
		'<rootDir>/src/**/?(*.)(spec|test).js?(x)'
	],
	testEnvironment: 'jsdom',
	browser: true,
	testURL: 'http://localhost',
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
		"\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
		'^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/fileTransform.js'
	},
	transformIgnorePatterns: [
		'node_modules',
		'[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'
	],
	moduleFileExtensions: [
		'js',
		'json',
		'jsx',
		'node'
	],
	snapshotSerializers: [
		'enzyme-to-json/serializer',
	],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/__mocks__/fileMock.js",
		"\\.(css|less|scss|sass)$": "<rootDir>/config/__mocks__/styleMock.js"
	},
};
