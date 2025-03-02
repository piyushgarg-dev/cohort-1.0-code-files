const obj1 = {
  fname: 'Piyush',
  lname: 'Garg',
  getFullname: function () {
    if (this.lname !== undefined) return `${this.fname} ${this.lname}`;
    return this.fname;
  },
};

const obj2 = {
  fname: 'Anirudh',
  lname: 'Jwala',
};

// DRY - Do not repeat yourself

console.log(obj1.getFullname());
console.log(obj2.getFullname());
console.log(obj2.toString());
