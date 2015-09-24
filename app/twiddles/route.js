import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.session.fetch('github-oauth2').catch(function() {
      this.transitionTo('/');
    }.bind(this));
  },

  model() {
    return this.store.findAll('gist');
  }
});