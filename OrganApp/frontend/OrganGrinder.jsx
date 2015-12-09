var ReactDOM = require('react-dom');
var React = require('react');
var KeyListener = require('./util/KeyListener.js');
var Key = require('./components/Key.jsx');
// var Organ = require('./components/Organ.jsx');


document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#root');
  ReactDOM.render(<Key keyName='C4'/>, root);
});
