const request = require("supertest")

const server = require('../api/server')

  let testName = `testing${Date.now()}`
  let token
  let userID

describe("cohorts router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("Use should be able to register, login, and get a token", function() {
    it("Should register succesfully", function() {
      return request(server)
        .post("/api/authentication/register")
        .send({
          username: testName,
          email: "testing@test.com",
          password: "passwordTest1"
        })
        .then(res => {
          expect(res.status).toBe(200);
        })
    })

    it("Should fail to login with bad info", function() {
      return request(server)
        .post("/api/authentication/login")
        .send({
          username: testName,
          password: "passwordFailTest1"
        })
        .then(res => {
          expect(res.status).toBe(400)
        })
    })

    it("Should succesfully login when handed correct info", function() {
      return request(server)
      .post("/api/authentication/login")
      .send({
        username: testName,
        password: "passwordTest1"
      })
      .then(res => {
        token = res.body.token
        userID = res.body.id
        expect(res.status).toBe(200)
      })
  })

    it("Should get user data when handed a user ID", function() {
      return request(server)
        .get(`/api/users/${userID}`)
        .set("authorization", token)
        .then(res => {
          expect(res.status).toBe(200)
          expect(res.body.id).toBe(userID)
          expect(res.body.username).toBe(testName)
        })
    })

    it("Should successfully edit a user", function() {
      return request(server)
        .put(`/api/users/${userID}`)
        .set("authorization", token)
        .send({
          username: "Testing put"
        })
        .then(res => {
          expect(res.body.message).toBe('User succesfully editted')
          expect(res.status).toBe(200)
        })
    })

    it("Should stop an invalid ID from passing", function() {
      return request(server)
        .get('/api/users/100000000')
        .set("authorization", token)
        .then(res => {
          expect(res.status).toBe(400)
        })
    })

    it("Should delete user successfully", function() {
      return request(server)
        .delete(`/api/users/${userID}`)
        .set("authorization", token)
        .then(res => {
          expect(res.status).toBe(200)
        })
    })
  })

});
