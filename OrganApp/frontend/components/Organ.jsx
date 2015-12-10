var React = require('react');
var Key = require('./Key.jsx');
var TONES = require('../constants/Tones.js');
var Recorder = require('./Recorder.jsx');

var Organ = React.createClass({

  render: function(){
    var keys = Object.keys(TONES).map(function(keyName){
      var type = (keyName.length > 2) ? "sharp" : "normal";
      return <Key keyName={keyName} key={keyName} keyType={type}/>;
    });
    return(
      <div className='organ'>
        <span className='keyBoard'>
        {keys}
        </span>
        <Recorder />
      </div>

    );
  }
});

module.exports = Organ;
