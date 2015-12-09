var KeyActions = require('../actions/KeyActions.js');

var Keylistener = {
  var Mapping = {
//qwertyuiop[
  80: 'E3'
  87: 'F3'
  69: 'G3'
  82: 'A3'
  84: 'B3'
  89: 'C4'
  85: 'D4'
  73: 'E4'
  79: 'F4'
  80: 'G4'
  219:'A4'

//top row
  51: 'Gb3'
  52: 'Ab3'
  53: 'Bb3'
  55: 'C#4'
  56: 'D#4'
  48: 'F#4'
  189:'G#4'
  },

  keydown: function() {
    $(document).on('keydown', function(event){
      console.log(event);
      KeyActions.handleKeyDown(event.which);
    });
  },

  keyup: function() {
    $(document).on('keyup', function(event){
      KeyActions.handleKeyUp(event.which);
    });
  },
};

module.exports = Keylistener;
