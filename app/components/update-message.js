import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm: false,
  actions: {
    updateMessageForm() {
      this.set('updateMessageForm', true);
    },
    update(message) {
      var params = {
        author: this.get('author'),
        note: this.get('note'),
        question: this.get('question')
      };
      this.set('updateMessageForm', false);
      this.sendAction('update', message, params);
    }
  }
});
