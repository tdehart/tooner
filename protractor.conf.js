exports.config = {
  specs: [
    'public/modules/toons/tests/e2e/*.js'
  ],

  baseUrl: 'http://localhost:8080/',

  // Uncomment below when starting up selenium manually
  // seleniumAddress: 'http://0.0.0.0:4444/wd/hub',

  // gulp will use this server jar to start up selenium automatically
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',

  framework: 'jasmine',

  capabilities: {
    'browserName': 'chrome'
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 5000
  }
};
