function generateAccountNumber() {
  return Math.random().toString().slice(2, 12);
}

module.exports = generateAccountNumber;
