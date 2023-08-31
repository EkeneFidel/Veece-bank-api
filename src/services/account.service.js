const { Account, AccountTypes } = require("../models/account.model");
const generateAccountNumber = require("../utils/create-account-number");

const bankAccounts = [];

class AccountService {
  /**
   * The function creates a new account with a generated account number and account details, adds it to
   * a list of bank accounts, and returns the account information.
   * @param accountDetails - The accountDetails parameter is an object that contains information about
   * the account holder. It includes the holderName (the name of the account holder),
   * accountType (the type of account, e.g. savings or checking), and initialBalance (the initial
   * balance of the account).
   * @returns an object with the following properties:
   * - accountNumber: the account number of the newly created account
   * - holderName: the name of the account holder
   * - accountType: the type of the account
   * - initialBalance: the initial balance of the account
   */
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

  /**
   * The function "getAccountDetails" returns the account details for a given account number.
   * @param accountNumber - The accountNumber parameter is the unique identifier for a bank account. It
   * is used to search for and retrieve the details of a specific bank account from a list of bank
   * accounts.
   * @returns the account details for the specified account number.
   */
  getAccountDetails(accountNumber) {
    let accountDetails = bankAccounts.find(
      (acc) => acc.accountNumber === accountNumber
    );
    return accountDetails;
  }

  /**
   * The function returns all bank accounts.
   * @returns the variable "bankAccounts".
   */
  getAllAccounts() {
    return bankAccounts;
  }
}

module.exports = new AccountService();
