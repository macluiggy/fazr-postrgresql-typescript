import { Router } from "express";
var router = Router();
import { getUsers } from "../controllers/index.controller";

router.route("/test").get((req, res) => {
  res.send("hello world");
});
router.route("/users").get(getUsers);

export default router;
