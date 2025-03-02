class MyPromise {
  constructor(executorFn) {
    this._state = 'pending';
    this._successCallbacks = [];
    this._errorCallbacks = [];
    this._finallyCallbacks = [];

    this.value = undefined;

    executorFn(
      this.resolverFunction.bind(this),
      this.rejectorFunction.bind(this)
    );
  }

  then(cb) {
    if (this._state == 'fulfilled') {
      console.log(`Apka promise toh pehle hi pura hogya, Run hi kar deta hu`);
      cb(this.value);
      return this;
    }

    this._successCallbacks.push(cb);
    return this;
  }

  catch(cb) {
    if (this._state == 'rejected') {
      console.log(`Apka promise toh pehle hi reject hogya, Run hi kar deta hu`);
      cb();
      return this;
    }
    this._errorCallbacks.push(cb);
    return this;
  }

  finally(cb) {
    if (this._state !== 'pending') {
      cb();
      return this;
    }
    this._finallyCallbacks.push(cb);
    return this;
  }

  resolverFunction(value) {
    console.log(
      `Fullfilling Promise, Running ${this._successCallbacks.length} callbacks`
    );
    this.value = value;
    this._state = 'fulfilled';
    this._successCallbacks.forEach((cb) => cb(value));
    this._finallyCallbacks.forEach((cb) => cb());
  }

  rejectorFunction(err) {
    this._state = 'rejected';
    this._errorCallbacks.forEach((cb) => cb(err));
    this._finallyCallbacks.forEach((cb) => cb());
  }
}

function wait(seconds) {
  const p = new MyPromise((resolve, reject) => {
    resolve('Hahaha');
  });
  return p;
}

const p = wait(5);

console.log('Registering Callbacks');

p.then((e) => console.log(`V1 Promise Resolved After 5 sec`, e))
  .catch(() => console.log(` V1Rejected after 5 sec`))
  .finally(() => console.log(` V1 Mei toh harr baar chalunga`));

p.then((e) => console.log(`V2 Promise Resolved After 5 sec`, e))
  .catch(() => console.log(`V2 Rejected after 5 sec`))
  .finally(() => console.log(`V2 Mei toh harr baar chalunga`));
