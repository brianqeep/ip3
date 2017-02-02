import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    messages: this.store.findAll('message'),
    answers: this.store.findAll('answer')
  });
  },

  actions: {
    update(message, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !==undefined) {
          message.set(key,params[key]);
        }
      });
      message.save();
      this.transitionTo('message');
    },
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
    },
    destroyMessage(message){
      message.destroyRecord();
      this.transitionTo('index');
    }
  }
});
