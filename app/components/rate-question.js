import Ember from 'ember';

export default Ember.Component.extend({
  voteCount: Ember.computed('message.vote', function() {
    return this.get('message.vote') * -1;
  }),
  actions: {
    upVote(message) {
    this.sendAction("upVote", message);
    }
  }
});
