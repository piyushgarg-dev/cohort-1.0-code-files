const fs = require('fs');

setTimeout(() => {
  console.log('1');
}, 0);

setImmediate(() => {
  console.log('2');
}, 0);

// console.log('3');
