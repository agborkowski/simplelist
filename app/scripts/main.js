require.config({
  shim: {
  },

  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: 'vendor/jquery.min',
    ItemsModel: 'models/ItemsModel'
  }
});

require(['App'], function(app) {
  console.log('lala');

});