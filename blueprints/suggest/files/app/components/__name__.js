import Ember from 'ember';
import Suggest from 'suggest-addon/mixins/suggest';

export default Ember.Component.extend(Suggest,{
  didInsertElement: function(){
    // assgin your debounce method to 'doDebounce' e.g. this.set('doDebounce', this.searchCountry);
  }
});
