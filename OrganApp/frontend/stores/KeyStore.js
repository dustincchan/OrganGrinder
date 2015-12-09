var KeyStore = require('flux/utils').Store;
var _keys = [];

var addKey = function(keyName){
  _keys.push(keyName);
  KeyStore.__emitChange();
};

var removeKey = function(keyName){
  var idx = _keys.indexOf(keyName);
  _keys.splice(idx, 1);
  KeyStore.__emitChange();
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
