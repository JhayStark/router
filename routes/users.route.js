const router = require("express").Router;
const {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} = require("../controllers/users.controllers");

const userRouter = router();

userRouter.get("/", getUsers);

userRouter.post("/", createUser);

userRouter.delete("/", deleteUser);

userRouter.patch("/", updateUser);

module.exports = userRouter;
