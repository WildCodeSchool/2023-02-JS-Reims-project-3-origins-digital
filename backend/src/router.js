const express = require("express");

const router = express.Router();
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const usersControllers = require("./controllers/userControllers");

const videoControllers = require("./controllers/videoControllers");

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.read);
router.put("/videos/:id", verifyToken, videoControllers.edit);
router.post("/videos", verifyToken, videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", hashPassword, usersControllers.edit);
router.post("/users", hashPassword, usersControllers.add);
router.delete("/users/:id", usersControllers.destroy);

router.post(
  "/login",
  authControllers.getUserByNameWithPasswordAndPassToNext,
  verifyPassword
);
module.exports = router;
