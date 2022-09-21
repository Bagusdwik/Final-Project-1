const Users = require("../models/user-model");

class UserController {
  static async insertUser(req, res) {
    const { email, password } = req.body;
    try {
      const result = await Users.insertOne(email, password);

      res.send({
        status: "test",
        message: result,
      });
    } catch (err) {
      res.send({
        status: "Failed",
        message: err,
      });
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const result = await Users.loginUser(email, password);

      if (result.rowCount <= 0) {
        throw new Error("Email/password salah");
      }
      res.send({
        token: result,
      });
    } catch (err) {
      res.send({
        status: "failed",
      });
    }
  }
}

module.exports = UserController;
