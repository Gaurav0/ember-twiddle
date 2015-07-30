import Ember from "ember";
import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';
import runGist from "./helpers/run-gist";

setResolver(resolver);

const iframe = "#dummy-content-iframe";

Ember.Test.registerHelper('outputPane', function(app) {
  return app.testHelpers.find(iframe)[0].contentWindow;
});

Ember.Test.registerHelper('outputContents', function(app, selector) {
  let output = app.testHelpers.outputPane();
  return output.find(selector).text().trim();
});

Ember.Test.registerAsyncHelper('runGist', runGist);

