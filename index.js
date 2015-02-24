/* jshint node: true */
'use strict';

module.exports = {
  name: 'suggest-addon',
  included: function(app) {
    this._super.included(app);
    app.import('app/styles/typeahead.css');
  }
};
