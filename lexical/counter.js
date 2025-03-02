function createInstance() {
  let store = {
    value: 100,
  }; // 100 MB
  return function () {
    console.log(store);
  };
}
