'use strict';

describe('Deposit', function() {
  var transaction;
  var credit;
  var today;
  var amount;

  beforeEach(function() {
    today = new Date(2012, 1, 10);
    jasmine.clock().install();
    jasmine.clock().mockDate();
    credit = new Transaction(amount, today);
  });

  afterEach(function () {
    jasmine.clock().uninstall();
});

  it('should be a defined object', function() {
    expect(credit instanceof(Transaction)).toBe(true);
  });

  it('should be able to deposit any amount', function() {
    expect(credit.amount).toBe(amount);
  });

  it('should have a deposit date', function() {
    expect(credit.date).toBe(today);
  });

});
