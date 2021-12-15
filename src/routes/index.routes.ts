import { Router } from "express";
var router = Router();
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/index.controller";

router.route("/test").get((req, res) => {
  res.send("hello world");
});
router.route("/users").get(getUsers).post(createUser);
router.route("/users/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default router;
