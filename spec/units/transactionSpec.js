'use strict';

describe('Deposit', function() {

  it('should be a defined object', function() {
    expect(credit instanceof(Transaction)).toBe(true);
  });

  it('should be able to deposit any credit amount', function() {
    expect(credit.amount).toBe(amount);
  });

  it('should have a credit date', function() {
    expect(credit.date).toBe(today);
  });

  it('should be able to withdraw correct amount(500.00)', function() {
    expect(debit.amount).toBe(500.00);
  });

  it('should have a withdrawal date', function() {
    expect(debit.date).toBe(tomorrow);
  });
  
});