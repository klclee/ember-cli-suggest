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
* ```miniumCharLength``` is the minium char length before triggering the debounce method. default to 2.

## Example

You can also find a working example [here](https://github.com/klclee/suggest-example).

## Suggest Extra

If you use this component as its there is a extra mixin you can take advantage of. It will allow you to controll the list of suggestions
with the up, down arrow keys and enter keys. To use this on components you have already generated do the following:

* in your hbs template change the ```div``` with class ```tt-suggestion``` to bindable ```{{bind-attr class=":tt-suggestion result.highlight:tt-cursor"}}```
* import the new mixin ```import SuggestExtra from 'suggest-addon/mixins/suggest-extra';``` and mix that into your component.  

If you generate from version 0.1.4 this will be done for you

Either way you will need to style up the a class call ```tt-cursor``` for this to take effect. Something like:

```css
.tt-suggestion.tt-cursor {
	background-color: #333;
	cursor:pointer;
}
```
