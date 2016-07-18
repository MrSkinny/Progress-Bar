function ProgressBar(start, end) {
  this._start = start || 1;
  this._end = end || 100;
}

ProgressBar.prototype.start = function(onStart, onProgress, onEnd, interval) {
  var bar = this;
  
  var i = bar._start;
  var e = bar._end;
  interval = interval || 10;
  
  onStart();
  
  var intId = setInterval(function() {
    i++;
    if ( i % interval === 0 ) onProgress(i);
    if ( i > e ) {
      clearInterval(intId);
      onEnd();
    }
  }, 50);
  
};

module.exports = ProgressBar;
