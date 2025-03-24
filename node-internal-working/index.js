const fs = require('fs'); // 1
const crypto = require('crypto');

setTimeout(() => console.log('Set Timeout'), 0);

setImmediate(() => console.log('Set Immediate'));

process.env.UV_THREADPOOL_SIZE = 10;

fs.readFile('sample.txt', 'utf-8', function (err, data) {
  setTimeout(() => console.log('Set Timeout inSide FS'), 0);
  setImmediate(() => console.log('Immediate inside FS 1'));

  const start = Date.now();

  crypto.pbkdf2('password', 'salt1', 100000, 1024, 'sha512', (err, data) => {
    console.log(`[${Date.now() - start}ms]: Password 1 Hashed`);
  });

  crypto.pbkdf2('password', 'salt1', 100000, 1024, 'sha512', (err, data) => {
    console.log(`[${Date.now() - start}ms]: Password 2 Hashed`);
  });

  crypto.pbkdf2('password', 'salt1', 100000, 1024, 'sha512', (err, data) => {
    console.log(`[${Date.now() - start}ms]: Password 3 Hashed`);
  });

  crypto.pbkdf2('password', 'salt1', 100000, 1024, 'sha512', (err, data) => {
    console.log(`[${Date.now() - start}ms]: Password 4 Hashed`);
  });

  crypto.pbkdf2('password', 'salt1', 100000, 1024, 'sha512', (err, data) => {
    console.log(`[${Date.now() - start}ms]: Password 5 Hashed`);
  });

  crypto.pbkdf2('password', 'salt1', 100000, 1024, 'sha512', (err, data) => {
    console.log(`[${Date.now() - start}ms]: Password 6 Hashed`);
  });
});

console.log('hello');
