const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/user", itemControllers.browse);
router.get("/user/:id", itemControllers.read);
router.put("/user/:id", itemControllers.edit);
router.post("/user", itemControllers.add);
router.delete("/user/:id", itemControllers.destroy);

module.exports = router;
