const jwt = require("jsonwebtoken");

function authentication(req, res, next) {
  try {
    const auth = req.headers["x-access-token"];

    const decoded = jwt.verify(auth, process.env.JWT_KEY);

    if (!decoded) {
      throw new Error("Invalid Token");
    }

    req.user = { id: decoded.id, email: decoded.email };

    next();
  } catch (err) {
    res.send({
      status: "error",
      message: err.message,
    });
  }
}

module.exports = authentication;
