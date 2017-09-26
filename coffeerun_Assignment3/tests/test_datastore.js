(function (window) {
  'use strict';
  // Code will go here
  var App = window.App || {};
  function DataStore() {
    this.data = {};
  }
   DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  };
  DataStore.prototype.get = function (key) {
    return this.data[key];
  };
  DataStore.prototype.getAll = function () {
    return this.data;
  };
  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;
  var ds = new App.DataStore();
  ds.add('m@bond.com', 'tea');
  ds.add('james@bond.com', 'eshpressho');
  console.log(ds.getAll());
  ds.remove('james@bond.com');
  console.log(ds.getAll());
  ds.get('m@bond.com');
  ds.get('james@bond.com');
  console.log(ds.getAll());
  window.App = App;
})(window);
