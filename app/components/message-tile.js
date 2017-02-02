import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['vote:asc'],
  sortedMessages: Ember.computed.sort('messages', 'sortBy'),

  actions: {
    upVote(message) {
      this.sendAction("upVote", message);
    },
    update(message, params) {
      this.sendAction('update', message, params);
    },
    delete(message){
      if (confirm("Are you sure you want to delete this question")) {
        this.sendAction('destroyMessage', message);
      }
    }
  }
});
