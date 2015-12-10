var React = require('react');
var Key = require('./Key.jsx');
var TONES = require('../constants/Tones.js');

var Organ = React.createClass({

  render: function(){
    var keys = Object.keys(TONES).map(function(keyName){
      return <Key keyName={keyName} key={keyName} />;
    });
    return(
      <div className='organ'>
        <span className='keyBoard'>
        {keys}
        </span>
      </div>

    );
  }
});

module.exports = Organ;
