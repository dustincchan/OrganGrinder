var React = require('react');
var KeyStore = require('../stores/Keystore.js');
var Note = require('../util/Note.js');
var TONES = require('../constants/Tones.js');

var Key = React.createClass({
  getInitialState: function(){
    return {playing: false
    };
  },

  componentDidMount: function(){
    this.token = KeyStore.addListener(function(){
      var keys = KeyStore.all();
      if (keys.indexOf(this.props.noteName) >= 0) {
        this.setState({playing: true});
      } else {
        this.setState({playing: false});
      }
    });

    this.note = new Note(TONES[this.props.keyName]);
  },

  componentWillUnmount: function(){
    this.token.remove();
  }

});
