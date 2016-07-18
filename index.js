var interval = process.argv[2];
var printBlank = require('./progress').printBlank;
var ProgressBar = require('./progress').ProgressBar;

//===========================================

var bar = new ProgressBar();
bar.start(
  () => {
    process.stdout.write('Loading... [' + printBlank(this._end / 10 * 2) + ']' );
    process.stdout.cursorTo(12);
  },
  (progress) => process.stdout.write(progress.toString() + ' '),
  () => process.stdout.write(']\n'),
  interval
);

