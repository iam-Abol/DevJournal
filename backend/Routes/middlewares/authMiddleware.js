const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);

  if (!token) return res.status(401).json({ message: "not authenticated" });
  try {
    console.log("here in decoing");

    const decoded = jwt.verify(token, "secretsecretsecret");
    req.userId = decoded.userId;
    req.username = decoded.username;
    console.log("here");

    next();
  } catch (error) {
    console.log(error.message);

    res.status(401).json({ error: "Invalid token" });
  }
};
