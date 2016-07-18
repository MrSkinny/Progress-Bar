var interval = process.argv[2];
var ProgressBar = require('./ProgressBar');
var Utils = require('./Utils');

//===========================================

var bar = new ProgressBar();
bar.start(
  () => {
    process.stdout.write('Loading... [ ' + Utils.printBlank(bar.endIndex / 10 * 3) + ']' );
    process.stdout.cursorTo(13);
  },
  (progress) => process.stdout.write(progress.toString() + ' '),
  () => process.stdout.write(']\n'),
  interval
);

