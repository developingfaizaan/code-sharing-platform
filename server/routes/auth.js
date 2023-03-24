const express = require("express");

const { signup, login, updateProfilePhoto } = require("../controllers/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.patch("/profile/:id", updateProfilePhoto);


module.exports = router;
