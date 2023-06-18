const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect; // Import the 'expect' assertion style
chai.use(spies);

// Define the functions

function receivesAFunction(callback) {
  // Call the provided callback function
  callback();
}

function returnsANamedFunction() {
  // Return a named function
  return function namedFunction() {
    // Function body
  };
}

function returnsAnAnonymousFunction() {
  // Return an anonymous function
  return function () {
    // Function body
  };
}

// Write the tests

describe("index", () => {
  describe("receivesAFunction(callback)", () => {
    it("receives a function and calls it", () => {
      const spy = chai.spy();

      receivesAFunction(spy);

      expect(spy).to.have.been.called(); // Use Chai Spies to verify function invocation
    });
  });

  describe("returnsANamedFunction()", () => {
    let fn;

    before(() => {
      fn = returnsANamedFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns a named function", () => {
      expect(fn.name).to.not.be.empty;
    });
  });

  describe("returnsAnAnonymousFunction()", () => {
    let fn;

    before(() => {
      fn = returnsAnAnonymousFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns an anonymous function", () => {
      expect(fn.name).to.be.empty;
    });
  });
});

