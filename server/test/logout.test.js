const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app.js").app;
const mongoose = require("mongoose");

chai.should();
chai.use(chaiHttp);

describe("/logout ping", () => {
  it("it should return 200 and a message", (done) => {
    chai.request(app)
    .get(`/auth/logout`)
    .end((err, res) => {
      res.should.have.status(200);
      res.text.should.match(/You have successfully logged out/);
      if(err) throw err;
    });
    done();
  });
});

mongoose.disconnect();