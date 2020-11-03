const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

var functions = require('../app.js');
var setThings = functions.setThings;
var callSetThings = functions.callSetThings;

describe('app.js', function () {
  describe('setThings()', function () {
    it('should equal string 123 when true', function () {
      expect(setThings(true)).to.equal('123');
    });

    it('should equal string 456 when not false', function () {
      expect(setThings(false)).to.equal('456');
    });
  });

  describe('callSetThings()', function () {
    it('should call the spy', function () {
      var spy = sinon.spy(functions.setThings);

      expect(spy.calledOnceWith(true));
      expect(callSetThings()).to.equal('123');
    });
  });
});