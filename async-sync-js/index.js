const fs = require('fs');

function readFileWithPromise(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}

function writeFileWithPromise(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function unlinkWithPromise(filepath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filepath, function (e) {
      if (e) {
        reject(e);
      } else {
        resolve();
      }
    });
  });
}

// const readFileWithPromise = promisify(fs.readFile)
// readFileWithPromise().then()

// Multiple Async code is running in sync fashion
// readFileWithPromise('./hello.txt', 'utf-8')
//   .then((content) => writeFileWithPromise('./backup.txt', content))
//   .then(() => unlinkWithPromise('./hello.txt'))
//   .catch((e) => console.log('Error', e))
//   .finally(() => console.log('All DOne'));

function wait(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
}

// ------------- Aura +99999999999 ----------- (Syntax Sugar)
async function doTasks() {
  try {
    const fileContent = await readFileWithPromise('./hello.txt', 'utf-8');
    console.log('All DOne');
    await writeFileWithPromise('./backup.txt', fileContent);
    await wait(10);
    await unlinkWithPromise('./hello.txt');
    throw new Error('');
  } catch (e) {
    console.log('Error', e);
  } finally {
    console.log('All DOne');
  }
}
console.log('Starting Program');

doTasks().then(() => console.log('All Done'));

console.log('End Of Program');
// readFileWithPromise('./hello.txt', 'utf-8').then(fileContent =>  )

// ------------- Legacy Code -------------
// fs.readFile('./hello.txt', 'utf-8', function (err, content) {
//   if (err) {
//     console.log('Error in file reading', err);
//   } else {
//     console.log('File Reading Success', content);
//     fs.writeFile('backup.txt', content, function (err) {
//       if (err) {
//         console.log(`Error in writing backup.txt`, err);
//       } else {
//         fs.unlink('./hello.txt', function (e) {
//           if (e) {
//             console.log('Error deleteing file', e);
//           } else {
//             console.log('File delete success');
//           }
//         });
//       }
//     });
//   }
// });

// Callback Hell

// 10Million

function sum(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 5 * 1000);
}

async function test() {
  return 1;
}

const x = test();
x.then((e) => e);
