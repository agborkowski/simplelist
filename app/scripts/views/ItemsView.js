define(['jquery','Event'], function($, Event){
  function ItemsView(model, elements) {
    this._model = model;
    this._elements = elements;

    this.addButtonClicked = new Event(this);
    this.delButtonClicked = new Event(this);

    var _this = this;

    return {
      init : function() {

        var self = this;
        // attach model listeners
        _this._model.added.attach(function () {
          self.update();
        });
        _this._model.removed.attach(function () {
          self.update();
        });

        _this._elements.addButton.click(function () {
          self.addButtonClicked.notify();
          _this._elements.itemName.val('');
          return false;
        });

        _this._elements.delButton.live('click', function () {
          self.delButtonClicked.notify($(this).parent('li').data('id'));
        });

        return self;
      },
      show : function () {
        this.update();
      },

      update : function () {
          var list, items, index;

          list = _this._elements.list;
          list.empty();

          items = _this._model.get();
          for (index = 0; index < items.length; index += 1) {
              if (items.hasOwnProperty(index)) {
                  list.append($('<li data-id="' + index + '">' + items[index] + ' <button class="delete">delete</button></li>'));
              }
          }
      },

      elements : _this._elements,
      addButtonClicked : _this.addButtonClicked,
      delButtonClicked : _this.delButtonClicked
    }
  }
  return ItemsView;
});