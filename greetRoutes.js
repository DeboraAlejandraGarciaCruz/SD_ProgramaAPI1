const router = require("express").Router();
const { validarToken } = require("../Middlewares/authMiddleware");
const {greetProtected} = require("../Controller/greetController");

router.get("/saludo-protegido", validarToken, greetProtected);

module.exports = router;
//"token": "token-falso-67c12a25eee40455ccac5e78"