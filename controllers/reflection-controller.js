const reflection = require("../models/reflection-model");

class ReflectionController {
  async getAllData(req, res) {
    const result = await reflection.findAll(req.user.id);
    res.status(200).send({
      message: "Success",
      total: result.length,
      data: result,
    });
  }

  async postData(req, res) {
    try {
      const resultOne = await reflection.insertOne(req.body);

      res.status(201).send({
        status: "success",
        result: {
          data: resultOne.rows,
        },
      });
    } catch (err) {
      res.send({
        status: "failed",
        message: err.message,
      });
    }
  }
}

module.exports = new ReflectionController();
