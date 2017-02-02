import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['vote:asc'],
  sortedMessages: Ember.computed.sort('messages', 'sortBy'),

  actions: {
    upVote(message) {
      this.sendAction("upVote", message);
    }
  }
});
