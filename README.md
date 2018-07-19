# Bank Tech Test

### Instructions

**Requirements**
* You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)

* Deposits, withdrawal.

* MAccount statement (date, amount, balance) printing.

* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
### User Stories
```
As a client,
So that I can save and store money
I want to be able to deposit funds
```
```
As a client,
So that I can spend my earnings
I want to be able to withdraw funds
```
```
As a client,
So that I can keep track of my spending
I want to be able to view a statement
```
### Approach

* Started the process by working out the unit specifications.
  * began with a `TransactionSpec.js` file and tested that the object existed

* Implemented feature and unit tests - using these as a guide to lead throughout the main code base

### Conclusion
I should have began with more planning, as throughout the journey it became clear that I needed to keep renaming the objects and functions - with more detailed planning this would have enabled me to complete the tasks at a better pace.

A large chunk of time was spent attempting to implement a date feature for the eventual viewing of the statement - should have requested help earlier, but felt the need to find this out for myself. 
