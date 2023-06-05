const express = require("express");

const router = express.Router();

const usersControllers = require("./controllers/itemControllers");

const videoControllers = require("./controllers/videoControllers");

router.get("/video", videoControllers.browse);
router.get("/video/:id", videoControllers.read);
router.put("/video/:id", videoControllers.edit);
router.post("/video", videoControllers.add);
router.delete("/video/:id", videoControllers.destroy);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);
router.delete("/users/:id", usersControllers.destroy);

module.exports = router;
