const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
    req.userID = decodeToken.id;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token", error: err });
  }
}

module.exports = authenticate;
