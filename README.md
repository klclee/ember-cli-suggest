# Ember-cli-suggest

This addon should take out some of the headache and boiler plate for *typeahead* behaviour. It consiste of a blueprint that will generate a component with the basic hbs. It will also include a mixin to use for the generated component (js).

## Usage

### Installation

```bash
npm install ember-cli-suggest
```

### Generate

```bash
ember generate suggest my-component
```

### Configure

Once the component is generated you will find the populated template in 'templates/components' and 'app/components'. Feel to alter anything! Only thing you should maintain are the following (this allows the mixin to do its job).

* Assign to property ```doDebounce``` for the method to call when search is to be performed.
* Set the debounce gap using the ```debounceTime``` property.
* Assign to property ```suggestions``` with the array of search result.
* Tell the mixin what function should be called upon selected from the dropdown by assigning the function name (as String) using the ```selectedFunction``` property.

### Example

The following is a example of the use of this component upon generating using ```ember generate suggest city-input```.

## HBS
```
{{city-input placeHolderText='Find a City' debounceTime=1000 selectedFunction='selectedCountry'}}
```

## Component js

```javascript
import Ember from 'ember';
import Suggest from 'suggest-addon/mixins/suggest';
import Countries from 'suggest-this/utils/countries';

export default Ember.Component.extend(Suggest,{
  didInsertElement: function(){
    this.set('doDebounce', this.searchCountry);
  },
  searchCountry: function(){
    var _scope = this;
    var found = Countries.findBy('display', this.inputVal);

    this.set('suggestions',[found]);
    this.set('suggestStyles', _scope.get('suggestStylesOn'));

  },
  actions: {
    selectCity: function(item){
      this.set('selectedVal', item.get('name'));
    }
  }
});
```
