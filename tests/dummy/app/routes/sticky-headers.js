import Ember from 'ember';
import makeModel from '../utils/make-model';

export default Ember.Route.extend({
  model: function() {
    var items = [];
    for (var i = 0; i < 10000; i++) {
      items.push({name: "Item " + i});
    }
    return items;
  }
});
