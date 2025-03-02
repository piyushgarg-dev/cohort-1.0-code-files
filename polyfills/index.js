if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  };
}

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = cb(this[i], i);
      result.push(value);
    }

    return result;
  };
}

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, initalValue = undefined) {
    let acc = initalValue || this[0]; // Nullish Col
    const startIndex = initalValue ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      acc = cb(acc, this[i]);
    }

    return acc;
  };
}

const arr = [1, 2, 3, 4, 5];

arr.myForEach((value, index) =>
  console.log(`At Index: ${index} Value: ${value}`)
);

const trippedArray = arr.myMap((e) => e * 3);
console.log(trippedArray);

const res = arr.reduce(
  (abTakKiValue, currentValue) => abTakKiValue + currentValue
);

const myRes = arr.myReduce(
  (abTakKiValue, currentValue) => abTakKiValue + currentValue
);

console.log({ res, myRes });
