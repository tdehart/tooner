exports.config = {
  specs: [
    'public/js/system/tests/e2e/*.js'
  ],

  baseUrl: 'http://localhost:8080/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};