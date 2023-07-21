const express = require("express");

const router = express.Router();
const { hashPassword, verifyPassword } = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const usersControllers = require("./controllers/userControllers");

const videoControllers = require("./controllers/videoControllers");

const categoryControllers = require("./controllers/categoryControllers");

router.get("/categories", categoryControllers.browse);

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.read);
router.put("/videos/:id", videoControllers.edit);
router.post("/videos", videoControllers.add);
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
