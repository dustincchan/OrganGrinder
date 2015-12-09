var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher.js');
var KeyStore = new Store(Dispatcher);
var _keys = [];

var addKey = function(keyName){
  if (_keys.indexOf(keyName) < 0) {
    _keys.push(keyName);
    KeyStore.__emitChange();
  }
  console.log(_keys);
};

var removeKey = function(keyName){
  var idx = _keys.indexOf(keyName);
  _keys.splice(idx, 1);
  KeyStore.__emitChange();
};

KeyStore.all = function() {
  return _keys.slice();
};

KeyStore.__onDispatch = function(payload){
  switch (payload.actionType){
    case 'KEY_DOWN' :
      addKey(payload.noteName);
      break;
    case 'KEY_UP' :
      removeKey(payload.noteName);
      break;
  }
};


module.exports = KeyStore;
