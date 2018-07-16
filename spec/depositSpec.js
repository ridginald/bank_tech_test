'use strict';

describe('Deposit', function() {
  var deposit;

  beforeEach(function() {
    deposit = new Deposit(1000.00);
  });

  it('should be defined as an object', function(){
    expect(deposit instanceof(Deposit)).toBe(true);
  });

  it('should be able to deposit correct amount', function(){
    expect(deposit.amount).toBe(1000.00);
  });

});
