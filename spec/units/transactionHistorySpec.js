"use strict";

describe('TransactionHistory', function(){

  it('should be a defined object', function() {
    expect(transactionHistory instanceof(TransactionHistory)).toBe(true);
  });

  it('should have a transactions property', function() {
    expect(transactionHistory.transactions).toBeDefined();
  });

  it('should return a history of transactions', function(){
    expect(transactionHistory.transactions).toBe(transactions)
  });
  
});
