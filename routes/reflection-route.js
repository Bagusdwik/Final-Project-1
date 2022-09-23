const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({
    message: {
      id: req.user.id,
      email: req.user.email,
    },
  });
  // fill
});

router.post("/", (req, res) => {
  // fill
});

router.put("/:id", (req, res) => {
  // fill
});

router.delete("/:id", (req, res) => {
  // fill
});

module.exports = router;
