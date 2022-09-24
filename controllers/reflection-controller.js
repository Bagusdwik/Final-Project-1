class ReflectionController {
  getAllData(req, res) {
    res.status(200).send({
      message: "Success",
      total: 10,
      data: "Test Development",
    });
  }
}

module.exports = new ReflectionController();
