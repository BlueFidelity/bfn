var assert = require('assert')
var bfn = require('../index')

describe('bfn', function () {
  describe('bfn', function () {
    it('should return object', function () {
      assert.equal('object', typeof bfn)
    })
  })
  describe('bfn.proxy', function () {
    it('should return function', function () {
      assert.equal('function', typeof bfn.proxy)
    })
  })
})
