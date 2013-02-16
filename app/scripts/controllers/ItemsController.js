define(function(){
  function ItemsController(model, view) {
    this._model = model;
    this._view = view;

    var _this = this;

    return {
      controlls : function () {
        var self = this;
        _this._view.addButtonClicked.attach(function () {
          self.add();
        });

        _this._view.delButtonClicked.attach(function (obj, index) {
          self.remove(index);
        });
      },

      add : function () {
        var item = _this._view.elements.itemName.val();
        if (item) {
          _this._model.add(item);
        }
      },

      remove : function (index) {
        _this._model.remove(index);
      }
    }
  }
  return ItemsController;
});