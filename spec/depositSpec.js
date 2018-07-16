'use strict';

describe('Deposit', function() {
  var deposit;

  beforeEach(function() {
    deposit = new Deposit();
  });

  it('should be defined as an object', function(){
    expect(deposit instanceof(Deposit)).toBe(true);
  });
});
