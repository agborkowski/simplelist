define(['Event'], function(Event) {
  function ItemsModel(items) {
    this._items = items;

    this.removed = new Event(this);
    this.added = new Event(this);

    var self = this;

    return {
      get : function () {
          return [].concat(self._items);
      },

      add : function (item) {
          self._items.push(item);
          self.added.notify({ item : item });
      },

      remove : function (index) {
          var item;

          item = self._items[index];
          self._items.splice(index, 1);
          self.removed.notify({ item : item });
      },

      added : self.added,
      removed : self.removed
    }
  }
  return ItemsModel;
});