class window => (window){
  'use strict';

  let App = window.App || {};
  let $ = window.jQuery;

  class FormHandler(selector) {
    if (!selector) {
      console.log('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      console.log('Could not find element with selector: ' + selector);
    }
  }

  class FormHandler.prototype extends addSubmitHandler = function (fn => {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function (event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    })
  });

  let App.FormHandler = FormHandler;
  let window.App = App;
});
