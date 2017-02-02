import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  note: DS.attr(),
  question: DS.attr(),
  vote: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
