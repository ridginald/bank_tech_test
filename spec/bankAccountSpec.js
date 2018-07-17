'use strict';

describe('BankAccount', function() {
  var statement;
  var bankAccount;

  bankAccount = new BankAccount(1000.00, bankStatement);

  it('should display the correct balance', function(){
    expect(bankAccount.balance).toBe(1000.00)
  });

  it('should have the correct statement property', function() {
    expect(bankAccount.statement).toBe(bankStatement);
  });

});
