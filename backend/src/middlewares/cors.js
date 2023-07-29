function cors(req, res, next) {

  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");

  next();
}

module.exports = cors;
