import Ember from 'ember';

export default Ember.Mixin.create({
  hightlightIndex: -1,
  selectableSuggestion: null,
  keyDown: function(event){
    this._super(event);
    if( this.get('suggestStyles') !== 'display:none;'){
      if (event.keyCode === 40){
        this._highlightResult('down');
      }else if (event.keyCode === 38){
        this._highlightResult('up');
      }else if(event.keyCode === 13){
        if(!Ember.isBlank(this.selectableSuggestion)){
          this.send('selectItem', this.selectableSuggestion);
        }
      }
    }
  },
  _highlightResult: function(direction){
    var newHighlightIndex = -1;
    if(direction === 'down'){
      newHighlightIndex = this.hightlightIndex + 1;
    }else if( this.hightlightIndex > 0){
      newHighlightIndex = this.hightlightIndex - 1;
    }

    if(newHighlightIndex < this.get('suggestions').length){
      if(this.hightlightIndex > -1){
        var currentResult = this.get('suggestions').objectAt(this.hightlightIndex);
        currentResult.set('highlight', false);
      }
      this.set('hightlightIndex', newHighlightIndex);

      if(this.hightlightIndex > -1){
        var nextResult = this.get('suggestions').objectAt(this.hightlightIndex);
        nextResult.set('highlight', true);
        this.set('selectableSuggestion', nextResult);
      }
    }
  }
});
