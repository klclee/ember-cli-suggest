import Ember from 'ember';

export default Ember.Mixin.create({
  selectedFunction: '',
  placeHolderText: '',
  doDebounce: null,
  inputVal: '',
  selectedVal: '',
  suggestions: Ember.A(),
  selectedFromList: false,
  debounceTime: 0,
  miniumCharLength: 2,
  escapedChars: [40,38, 13],
  showSuggest: false,
  keyUp: function(event){
    var _scope = this;
    if(event.keyCode === 27){
      this.set('showSuggest', false);
    }else if(this.escapedChars.indexOf(event.keyCode) === -1){
      if(typeof this.get('targetObject').hideAlerts === 'function'){
        this.get('targetObject').hideAlerts();
      }
      var noSpace = $(event.target).val().replace(/(^\s+|\s+$)/g, '');
      if($(event.target).hasClass('typeahead') && noSpace.length > this.miniumCharLength ){
        this.set('inputVal', noSpace);
        Ember.run.debounce(this, this.doDebounce, this.debounceTime);
      }
    }
  },
  focusOut: function(){

    var _scope = this;
    var func = function(){
      if( _scope.isDestroyed ) return;
      _scope.set('showSuggest', false);
      if(!_scope.get('selectedFromList')){
        _scope.set('selectedVal', '');
      }
    };
    Ember.run.later(this, func, 300); // set a little delay so give the select a chance to set
  },
  actions: {
    selectItem: function(value){
      this.set('selectedFromList', true);
      this.send(this.selectedFunction, value);
    }
  }
});
