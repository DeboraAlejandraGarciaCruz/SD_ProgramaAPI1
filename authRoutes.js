const router = require("express").Router()
const { Router } = require("express");
const { getUsers, loginController, createUserController } = require("../Controller/authController")

router.get("/users", getUsers);
router.post("/users", createUserController)
router.post("/login", loginController);

module.exports = router;