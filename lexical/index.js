let fname = 'Piyush';

function sayName() {
  let lname = 'Garg';

  function inner() {
    console.log('Fname is', fname, 'lname is', lname);
    return;
  }

  inner();
}

console.log('Value of Fname is', fname);
sayName();
