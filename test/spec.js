var privates = require('../');
var assert = require('assert');

describe('privates', function() {

  it('gets and sets with objects as keys', function() {
    var foo = {x: 1};
    privates.set(foo, 'x', 2);
    assert.equal(foo.x, 1);
    assert.equal(privates.get(foo, 'x'), 2);
  });

  it('fails when it gets a literal', function() {
    assert.throws(function() {
      privates.set('x', 1);
    });
  });

});
