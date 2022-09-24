const router = require("express").Router();
const reflectionController = require("../controllers/reflection-controller");

router.route("/").get(reflectionController.getAllData).post();

router.route("/:id").get().put().delete();

module.exports = router;
