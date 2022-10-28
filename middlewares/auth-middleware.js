const jwt = require("jsonwebtoken");

function authentication(req, res, next) {
  try {
    const auth = req.headers["x-access-token"].split(" ");
    if (auth[0] !== "Bearer") throw new Error("Invalid Bearer");
    if (!auth[1]) {
      throw new Error("Invalid JsonWebToken");
    }
    const decoded = jwt.verify(auth[1], process.env.JWT_KEY);

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
