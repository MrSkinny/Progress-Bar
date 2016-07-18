var interval = process.argv[2];
var ProgressBar = require('./ProgressBar');
var Utils = require('./Utils');

//===========================================

var bar = new ProgressBar();
bar.start(
  () => {
    process.stdout.write('Loading... [' + Utils.printBlank(this._end / 10 * 2) + ']' );
    process.stdout.cursorTo(12);
  },
  (progress) => process.stdout.write(progress.toString() + ' '),
  () => process.stdout.write(']\n'),
  interval
);

