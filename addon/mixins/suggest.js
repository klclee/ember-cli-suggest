import Ember from 'ember';

export default Ember.Mixin.create({
  layoutName: 'components/type-ahead',
  selectedFunction: '',
  placeHolderText: '',
  doDebounce: null,
  inputVal: '',
  selectedVal: '',
  suggestions: Ember.A(),
  suggestStylesOn: 'position: absolute; top: 100%; left: 0px; z-index: 100; display: block; right: auto;',
  suggestStyles: 'display:none;',
  selectedFromList: false,
  keyUp: function(event){
    if(event.keyCode === 27){
      this.set('suggestStyles', 'display:none;');
    }else{
      var inp = String.fromCharCode(event.keyCode);
      if (/[a-zA-Z0-9-_ ]/.test(inp)){
        if(typeof this.get('targetObject').hideAlerts === 'function'){
          this.get('targetObject').hideAlerts();      
        }
        var noSpace = $(event.target).val().replace(/(^\s+|\s+$)/g);
        if($(event.target).hasClass('typeahead') && noSpace.length > 2 ){
          this.set('inputVal', noSpace);
          Ember.run.debounce(this, this.doDebounce, 1000);
          this.doDebounce();
        }
      } 
    }
  },
  focusOut: function(){

    var _scope = this;
    var func = function(){
      _scope.set('suggestStyles', 'display:none;');
      if(!_scope.get('selectedFromList')){
        _scope.set('selectedVal', '');
      }
    };
    setTimeout(func, 200); // set a little delay so give the select a chance to set
  },
  keyDown: function(){
    // 40 down 38 up
    // console.log('ddd', event.keyCode);
  },
  showLoading: function(){
    this.get('suggestions').pushObject({});
    this.set('suggestStyles', this.get('suggestStylesOn'));
  },
  actions: {
    selectItem: function(value){
      this.set('selectedFromList', true);
      this.send(this.selectedFunction, value);
    }
  }
});