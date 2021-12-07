const express = require("express");
const router = express.Router();
const controller = require("../controllers/tarefasController");

router.get("/", controller.getAll);

modules.exports = router;