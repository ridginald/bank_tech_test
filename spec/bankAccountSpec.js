'use strict';

describe('BankAccount', function(){

  it('should display the correct balance', function(){
    expect(bankAccount.balance).toBe(0.00)
  });

  it('should have the correct statement property', function(){
    expect(bankAccount.statement).toBe(bankStatement);
  });

  describe('Deposit', function(){
    it('should increase the balance', function(){
      bankAccount.deposit(1000.00);
      expect(bankAccount.balance).toEqual(1000.00);
    });
  });
});
