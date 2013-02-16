define('App', ['Event', 'models/ItemsModel','views/ItemsView', 'controllers/ItemsController'], function(Event, ItemsModel, ItemsView, ItemsController) {
  console.log('appjs');

  /**
   * App
   * @type {[type]}
   */
  var model = window.model = new ItemsModel(['PHP', 'JavaScript']);
  var view = new ItemsView(model, {
      'list' : $('#items'),
      'itemName' : $('#item-name'),
      'addButton' : $('#item-add'),
      'delButton' : $('#items .delete')
  }).init();
  var controller = new ItemsController(model, view).controlls();

  view.show();
});