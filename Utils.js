exports.printBlank = function printBlank(n){
  var list = '';
  for ( var i = 0; i < n; i++ ) {
    list += String.fromCharCode(32);
  }
  return list;
};
