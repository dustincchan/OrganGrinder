var React = require('react');
var KeyStore = require('../stores/KeyStore.js');
var Note = require('../util/Note.js');
var TONES = require('../constants/Tones.js');

var Key = React.createClass({
  getInitialState: function(){
    return {playing: false
    };
  },

  componentDidMount: function(){
    this.token = KeyStore.addListener(this.onKeyStoreChange);

    this.note = new Note(TONES[this.props.keyName]);
  },

  onKeyStoreChange: function(){
    var keys = KeyStore.all();
    // console.log(keys);
    if (keys.indexOf(this.props.keyName) >= 0) {
      this.setState({playing: true});
      this.note.start();
    } else {
      this.setState({playing: false});
      this.note.stop();
    }
  },

  componentWillUnmount: function(){
    this.token.remove();
  },

  render: function(){
    var playing = (this.state.playing ? " playing" : "");
    var sharp = (this.props.keyType === 'sharp' ? " sharp" : "");
    var classList = "key" + playing + sharp;
    return(<div className={classList}></div>);
  }

});

module.exports = Key;
