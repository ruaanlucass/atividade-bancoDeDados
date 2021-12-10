const express = require("express");
const router = express.Router();
const controller = require("../controller/tarefasController");

router.get("/", controller.getAll);
router.post("/", controller.postTarefa);
router.get("/:id", controller.getById);
router.delete("/id:1", controller.deleteTarefa);
router.delete("/", controller.deleteTarefaConcluida);
router.put("/:id", controller.putTarefa);

module.exports = router;