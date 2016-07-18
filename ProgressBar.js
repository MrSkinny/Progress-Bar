function ProgressBar(start, end) {
  this._start = start || 1;
  this._end = end || 100;
}

ProgressBar.prototype.start = function(onStart, onProgress, onEnd, interval) {
  var bar = this;
  
  var s = bar._start;
  var e = bar._end;
  interval = interval || 10;
  
  onStart();
  
  var int = setInterval(function() {
    s++;
    if ( s % interval === 0 ) onProgress(s);
    if ( s > e ) {
      clearInterval(int);
      onEnd();
    }
  }, 50);
  
};

module.exports = ProgressBar;
