var React = require('react');
var Track = require('../util/Track.js');
var KeyStore = require('../stores/KeyStore.js');

var Recorder = React.createClass({
  getInitialState: function(){
    return{
      isRecording: false,
      track: new Track()
    };
  },

  componentDidMount: function(){
    this.token = KeyStore.addListener(function(){
      if (this.state.isRecording){
        this.state.track.addNotes(KeyStore.all());
      }
    }.bind(this));
  },

  componentWillUnmount: function(){
    this.token.remove();
  },

  handleClickStart: function(){
    this.state.track.startRecording();
    this.setState({isRecording: true});
    console.log("recorder started recording");
  },

  handleClickStop: function(){
    this.state.track.stopRecording();
    this.setState({isRecording: false});
    console.log("recorder stopped recording");
  },

  handleClickPlay: function(){
    this.state.track.play();
    console.log("recorder playing");
  },

  render: function() {
    return (
      <div className='recorder'>
        <button onClick={this.handleClickStart}>Start</button>
        <button onClick={this.handleClickStop}>Stop</button>
        <button onClick={this.handleClickPlay}>Play</button>
      </div>
    );
  }
});

module.exports = Recorder;
