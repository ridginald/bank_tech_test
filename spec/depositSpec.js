'use strict';

describe('Deposit', function() {
  var deposit;
  var today;
  var amount;

  beforeEach(function() {
    today = new Date(2012, 1, 10);
    jasmine.clock().install();
    jasmine.clock().mockDate();
    deposit = new Deposit(amount, today);
  });

  afterEach(function () {
    jasmine.clock().uninstall();
});

  it('should be a defined object', function() {
    expect(deposit instanceof(Deposit)).toBe(true);
  });

  it('should be able to deposit any amount', function() {
    expect(deposit.amount).toBe(amount);
  });

  it('should have a deposit date', function() {
    expect(deposit.date).toBe(today);
  });

});
