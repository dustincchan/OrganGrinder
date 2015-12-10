var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher.js');
var KeyStore = new Store(Dispatcher);
var _keys = [];

var addKey = function(keyName){
  if (_keys.indexOf(keyName) < 0) {
    _keys.push(keyName);
    KeyStore.__emitChange();
  }
};

var removeKey = function(keyName){
  var idx = _keys.indexOf(keyName);
  _keys.splice(idx, 1);
  KeyStore.__emitChange();
};

var resetKeys= function(keyArray){
  _keys = keyArray;
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
    case 'RESET_KEYS' :
      resetKeys(payload.keys);
      break;
  }
};


module.exports = KeyStore;
