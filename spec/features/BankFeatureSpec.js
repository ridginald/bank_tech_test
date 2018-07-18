'use strict';

describe('Features', function() {

  var account;

  beforeEach(function() {
    account = new BankAccount();
  });

  it('client can make a deposit of 1000.00', function() {
    account.deposit(1000.00);
    expect(account.balance).toEqual(1000.00);
  });

  it('client can make a withdrawal of 500.00', function() {
    account.withdraw(500.00);
    expect(account.balance).toEqual(-500.00);
  });

  it('deposit date is recorded', function() {
    account.deposit(1000.00);
    expect(account.viewStatement()).toContain("18/07/2018");
  });

  it('withdrawal date is recorded', function() {
    account.withdraw(1000.00);
    expect(account.viewStatement()).toContain("18/07/2018");
  });
});
