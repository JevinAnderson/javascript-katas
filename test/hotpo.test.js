var { expect } = require('chai');
const hotpo = require('../src/hotpo');


describe('#hotpo()', function() {

  const tests = [
    { args: [1], expected: 0 },
    { args: [5], expected: 5 },
    { args: [6], expected: 8 },
    { args: [23], expected: 15 }
  ];

  tests.forEach(function(test) {    

    const response = hotpo.apply(this, test.args);

    describe(`hotpo(${test.args.join(', ')})`, function() {

      it('should return a numeric value', function() {
        expect(response).to.be.a('number');
      });

      it(`should return the number of times to reach zero from \`${test.args[0]}\``, function() {
        expect(response).to.equal(test.expected);
      });

    })

  });  

});
