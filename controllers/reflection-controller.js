const reflection = require("../models/reflection-model");
const AppError = require("../utils/app.error");

class ReflectionController {
  async getAllData(req, res, next) {
    try {
      const result = await reflection.findAll(req.user.id);
      if (!result.length) {
        return next(new AppError("Data not found", 404));
      }
      res.status(200).send({
        message: "Success",
        total: result.length,
        data: result,
      });
    } catch (err) {
      next(new AppError("Fail to catch data", 404));
    }
  }

  async postData(req, res, next) {
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
  //add test-commentar

  async deleteData(req, res, next) {
    try {
      const result = await reflection.deleteOne(req.params.id);

      res.status(204).send({
        status: "success",
        message: null,
      });
    } catch (err) {
      next(new AppError(err.message, 404));
    }
  }

  async updateData(req, res, next) {
    try {
      const result = await reflection.update(req.body);
      res.status(200).send({
        status: "success",
        message: "success update data",
        data: result,
      });
    } catch (error) {
      res.status(404).send({
        status: "fail",
        message: "failed update data",
      });
    }
  }
}

module.exports = new ReflectionController();
