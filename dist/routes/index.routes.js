"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var router = (0, express_1.Router)();
const index_controller_1 = require("../controllers/index.controller");
router.route("/test").get((req, res) => {
    res.send("hello world");
});
router.route("/users").get(index_controller_1.getUsers).post(index_controller_1.createUser);
router.route("/users/:id").get(index_controller_1.getUserById).put(index_controller_1.updateUser).delete(index_controller_1.deleteUser);
exports.default = router;
