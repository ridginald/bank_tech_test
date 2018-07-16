'use strict';

describe('Deposit', function() {
  var deposit;
  var today;

  beforeEach(function() {
    today = new Date(2018, 2, 6);
    jasmine.clock().install();
    jasmine.clock().mockDate();
    deposit = new Deposit(1000.00, today);
  });

  afterEach(function () {
    jasmine.clock().uninstall();
});

  it('should be a defined object', function() {
    expect(deposit instanceof(Deposit)).toBe(true);
  });

  it('should have the correct deposit amount', function() {
    expect(deposit.amount).toBe(1000.00);
  });

  it('should have a deposit date', function() {
    expect(deposit.date).toBe(today);
  });

});
