var KeyListener = require('../util/KeyListener.js');
var Dispatcher = require('../dispatcher/Dispatcher.js');

var KeyActions = {
  handleKeyDown: function(keyName){
    Dispatcher.dispatch({actionType: 'KEY_DOWN', noteName: keyName});
  },

  handleKeyUp: function(keyName){
    Dispatcher.dispatch({actionType: 'KEY_UP', noteName: keyName});
  }
};

module.exports = KeyActions;
