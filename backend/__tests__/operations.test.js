//const request = require('supertest');
//const app = require('../src/routes');
const { client } = require("../src/controller/ClientController")

describe('User', () => {
  it('should be able to create a new user', async () => {
    const response = await client.create({
      account: "5455",
      name: "Anne",
      balance: 3000
    });

    expect(response.body).toMatchObject({
      account: "5455",
      name: "Anne",
      balance: 3000
    });
  });
});  