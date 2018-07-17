'use strict';

describe('BankAccount', function() {
  var

  bankAccount = new BankAccount(1000.00);

  it('should display the correct balance', function(){
    expect(bankAccount.balance).toBe(1000.00)
  });

});
