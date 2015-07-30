import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-twiddle/tests/helpers/start-app';

let application;

module('Acceptance | minimal', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Able to do load a minimal gist', function(assert) {

  const files = [
    {
      filename: "application.template.hbs",
      content: "Hello, World!"
    }
  ];

  runGist(files);

  andThen(function() {
    const outputDiv = 'div';

    assert.equal(outputContents(outputDiv), 'Hello, World!', 'Minimal gist is displayed');
  });
});
