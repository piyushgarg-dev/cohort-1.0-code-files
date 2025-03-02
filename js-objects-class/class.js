class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;

    this.isActive = false;

    console.log(this.getFullname());
  }

  getFullname() {
    return `${this.fname} ${this.lname}`;
  }
}

const p1 = new Person('Piyush', 'Garg');
const p2 = new Person('Akash', 'Kadlag');
