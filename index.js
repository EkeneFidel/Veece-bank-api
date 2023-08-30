const express = require("express");
const bodyParser = require("body-parser");
const accountRouter = require("./src/routes/account.route");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/accounts", accountRouter);
app.get("/api/v1/", (req, res) => {
  res.send("Bank Account Management API");
});
app.get("/", (req, res) => {
  res.send("Bank Account Management  API");
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ success: false, message: err.message });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
