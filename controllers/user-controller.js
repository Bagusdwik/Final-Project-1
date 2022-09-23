const Users = require("../models/user-model");
const jwt = require("jsonwebtoken");

class UserController {
  static async insertUser(req, res) {
    const { email, password } = req.body;
    try {
      const result = await Users.insertOne(email, password);

      res.status(201).send({
        status: "test",
        message: result,
      });
    } catch (err) {
      res.status(404).send({
        status: "Failed",
        message: err,
      });
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const { rowCount, rows } = await Users.loginUser(email, password);

      if (rowCount <= 0) {
        throw new Error("Email/password salah");
      }

      const tokenjwt = jwt.sign(
        { id: rows[0].id, email: rows[0].email },
        process.env.JWT_KEY
      );

      res.send({
        token: tokenjwt,
      });
    } catch (err) {
      res.send({
        status: "failed",
      });
    }
  }
}

module.exports = UserController;
