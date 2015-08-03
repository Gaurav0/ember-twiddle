import Ember from "ember";

export default Ember.Component.extend({
  classNames: ['run-or-live-reload'],

  /**
   * Whether user wishes the code to automatically run
   * @type {boolean}
   */
  isLiveReload: true,

  actions: {
    runNowClicked() {
      this.sendAction('runNow');
    },

    liveReloadClicked(checked) {
      this.sendAction('liveReloadChanged', checked);
    }
  }
});
