import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },

    saveMessage1() {
      var params = {
        author: this.get('author'),
        note: this.get('note'),
        question: this.get('question')
      };
      this.set('addNewMessage', false);
      this.sendAction('saveMessage2', params);
    }
  }
});
