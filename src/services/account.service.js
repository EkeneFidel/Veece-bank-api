const { Account, AccountTypes } = require("../models/account.model");
const generateAccountNumber = require("../utils/create-account-number");

const bankAccounts = [];

class AccountService {
  createAccount(accountDetails) {
    let accountNumber = generateAccountNumber();
    let newAccount = new Account(accountNumber, accountDetails);
    bankAccounts.push(newAccount);
    return {
      accountNumber: newAccount.accountNumber,
      holderName: newAccount.holderName,
      accountType: newAccount.accountType,
      initialBalance: newAccount.balance,
    };
  }

  getAccountDetails(accountNumber) {
    let accountDetails = bankAccounts.find(
      (acc) => acc.accountNumber === accountNumber
    );
    return accountDetails;
  }

  getAllAccounts() {
    return bankAccounts;
  }
}

module.exports = new AccountService();
