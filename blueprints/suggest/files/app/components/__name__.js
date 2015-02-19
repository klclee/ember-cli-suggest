import Ember from 'ember';
import Suggest from 'suggest-addon/mixins/suggest';
import SuggestExtra from 'suggest-addon/mixins/suggest-extra';

export default Ember.Component.extend(Suggest, SuggestExtra,{
  didInsertElement: function(){
    // assgin your debounce method to 'doDebounce' e.g. this.set('doDebounce', this.searchCountry);
  }
});
