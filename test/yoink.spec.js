'use strict';

var yoink = require('../lib');

describe('yoink', function() {
  it('should be a function', function() {
    expect(yoink).to.be.a('function');
  });

  it('should remove a property from an object by key', function() {
    var obj = {
      foo: 'bar',
      baz: 'quux'
    };
    var value = yoink(obj, 'baz');
    expect(value).to.equal('quux');
    expect(obj).to.eql({foo: 'bar'});
  });

  it('should return undefined if undefined passed', function() {
    expect(yoink()).to.be.undefined;
  });
});
