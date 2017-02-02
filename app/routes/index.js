import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    messages: this.store.findAll('message'),
    answers: this.store.findAll('answer')
  });
  },

  actions: {
    saveMessage3(params) {
      var newMessage = this.store.createRecord('message', params);
      newMessage.save();
      this.transitionTo('index');
    },
    upVote(message) {
      var voteScore = message.get("vote");
      message.set("vote", (voteScore -= 1));
      message.save();
      this.refresh();
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    }
  }
});
