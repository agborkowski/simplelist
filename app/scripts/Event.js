define(function(){
  /**
   * Support for observer pattenr
   * @param {[type]} sender [description]
   */
  function Event(sender) {
    this._sender = sender;
    this._listeners = [];

    var self = this;

    return {
      attach : function (listener) {
          self._listeners.push(listener);
      },
      notify : function (args) {
          var index;

          for (index = 0; index < self._listeners.length; index += 1) {
              self._listeners[index](self._sender, args);
          }
      }
    }
  }
  return Event;
});