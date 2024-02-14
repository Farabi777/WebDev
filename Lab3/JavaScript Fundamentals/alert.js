alert("I'm JavaScript!");

let name = prompt("What is your name?", "");
alert(name);

let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

if ("0") {
    alert( 'Hello' );
  }

alert( null || 2 || undefined );

let i = 3;

while (i) {
  alert( i-- );
}

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }

  function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", "");
  let n = prompt("n?", "");
  
  if (n <= 0) {
    alert(`Power ${n} is not supported,
      please enter an integer number greater than zero`);
  } else {
    alert( pow(x, n) );
  }

  describe("Raises x to power n", function() {
    it("5 in the power of 1 equals 5", function() {
      assert.equal(pow(5, 1), 5);
    });
  
    // Mocha will run only this block
    it.only("5 in the power of 2 equals 25", function() {
      assert.equal(pow(5, 2), 25);
    });
  
    it("5 in the power of 3 equals 125", function() {
      assert.equal(pow(5, 3), 125);
    });
  });