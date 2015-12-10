var KeyActions = require('../actions/KeyActions.js');

var Track = function(name, roll){
    if(typeof name === 'undefined'){name = 'untitled';}
    this.name = name;
    if(typeof roll === 'undefined'){roll = [];}
    this.roll = roll;
};


Track.prototype.startRecording = function () {
  this.roll = [];
  this.time = new Date();
  console.log("track recording");
};

Track.prototype.addNotes = function (notesArray) {
  var newTime = new Date();
  var timeElapsed = newTime - this.time;
  this.roll.push({timeSlice: timeElapsed, notes: notesArray});
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
  console.log("track stopped recording");
};


Track.prototype.play = function () {
  if (this.interval){ return; }
  var playbackStartTime = Date.now();
  console.log("track started playing");
  var currentNote = 0;
  var intervalId = setInterval(function(){
    if(currentNote >= this.roll.length){
      return clearInterval(intervalId);
    } else if ((Date.now() - playbackStartTime) > this.
    roll[currentNote]['timeSlice']) {
      KeyActions.resetKeys(this.roll[currentNote]['notes']);
      currentNote++;
    }
  }.bind(this), 10);

};

module.exports = Track;
