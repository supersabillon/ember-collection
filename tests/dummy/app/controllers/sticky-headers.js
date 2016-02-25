import Ember from 'ember';

export default Ember.Controller.extend({
  columns: Ember.computed(function() {
    return [10,10,10,10,10,10,10,10,10,10];
  })
});
