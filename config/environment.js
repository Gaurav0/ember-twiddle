/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-twiddle',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    host: 'https://api.github.com',
    githubOauthUrl: 'https://gatekeeper-gaurav.herokuapp.com/authenticate/',
    assetsHost: '/',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      rootElement: '#main-app'
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          scope: 'gist',
          apiKey: 'fa044e5e2807ff8cca4e'
        }
      }
    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.host = undefined;
  }

  if (environment === 'production') {
    ENV.githubOauthUrl = 'https://gatekeeper-gaurav.herokuapp.com/authenticate/';
    ENV.torii = {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          scope: 'gist',
          apiKey: 'fa044e5e2807ff8cca4e'
        }
      }
    };
  }

  if (environment === 'staging') {
    ENV.githubOauthUrl = 'https://canary-twiddle-gatekeeper.herokuapp.com/authenticate/';
    ENV.assetsHost = '//canary-assets.ember-twiddle.com/';
    ENV.torii = {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          scope: 'gist',
          apiKey: '085e033505c9d26ec27a'
        }
      }
    };
  }

  return ENV;
};
