const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ error: "⚠️ Access Denied - Please Login" });

  try {
    const validToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.userId = validToken.id;

    next();
  } catch (error) {
    res.status(400).json({ error: "⚠️ Invalid token" });
  }
};

module.exports = auth;
