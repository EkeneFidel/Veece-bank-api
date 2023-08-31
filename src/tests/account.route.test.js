const request = require("supertest");

const { app, server } = require("../../index.js");

afterAll(async () => {
  await server.close();
});

let accountNumber;

describe("Test create account route", () => {
  it("should create an account", async () => {
    const response = await request(app).post("/api/v1/accounts/create").send({
      holderName: "Test User",
      dob: "10-21-2023",
      accountType: "Current",
      initialBalance: 0,
    });
    accountNumber = response.body.data.accountNumber;
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toHaveProperty("accountNumber");
    expect(response.body.data).toHaveProperty("holderName");
    expect(response.body.data).toHaveProperty("accountType");
    expect(response.body.data).toHaveProperty("initialBalance");
  });
});

describe("Test get account details route", () => {
  it("should get details of an account", async () => {
    const response = await request(app).get(
      `/api/v1/accounts/${accountNumber}`
    );
    expect(response.statusCode).toBe(200);
  });
});

describe("Test get all accounts route", () => {
  it("should get details of all accounts", async () => {
    const response = await request(app).get("/api/v1/accounts/");
    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toEqual(1);
  });
});
