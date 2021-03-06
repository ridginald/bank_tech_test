'use strict';

describe('Features', function() {

  var account;
  var headers;
  var date;
  var amount;

  beforeEach(function() {
    account = new BankAccount();
    headers = "date  || credit  || debit  || balance"
    date = "19/07/2018"
    amount = "1000.00"
  });

  it('client can make a deposit of 1000.00', function() {
    account.deposit(1000.00);
    expect(account.balance).toEqual(1000.00);
  });

  it('client can make a withdrawal of 500.00', function() {
    account.withdraw(500.00);
    expect(account.balance).toEqual(-500.00);
  });

  it('date of deposit is recorded', function() {
    account.deposit(1000.00);
    expect(account.viewStatement()).toContain(date);
  });

  it('date of withdrawal is recorded', function() {
    account.withdraw(500.00);
    expect(account.viewStatement()).toContain(date);
  });

  it('client can print her bank statement', function() {
    expect(account.viewStatement()).toContain(headers);
  });

  it('bank statement prints transaction amount and date', function() {
    account.deposit(1000.00);
    expect(account.viewStatement()).toContain(amount);
  });
});
