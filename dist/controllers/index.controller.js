"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("users");
    try {
        const { rows } = yield database_1.pool.query("SELECT * FROM users");
        console.log(rows);
        return res.status(200).json(rows);
    }
    catch (error) {
        const e = error;
        console.log(e);
        return res.status(400).json({ Error: e.message, e });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("users");
    const { id } = req.params;
    try {
        const { rows } = yield database_1.pool.query("SELECT * FROM users WHERE id = $1", [id]);
        console.log(rows);
        return res.status(200).json(rows);
    }
    catch (error) {
        const e = error;
        console.log(e);
        return res.status(400).json({ Error: e.message, e });
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("users");
    const { name, email } = req.body;
    try {
        const { rows } = yield database_1.pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email]);
        console.log(rows);
        return res
            .status(200)
            .json({ message: "User created", user: { name, email } });
    }
    catch (error) {
        const e = error;
        console.log(e);
        return res.status(400).json({ Error: e.message, e });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("users");
    const { name, email } = req.body;
    const { id } = req.params;
    try {
        const { rows } = yield database_1.pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name, email, id]);
        console.log(rows);
        return res
            .status(200)
            .json({ message: "User updated", user: { name, email } });
    }
    catch (error) {
        const e = error;
        console.log(e);
        return res.status(400).json({ Error: e.message, e });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("users");
    const { id } = req.params;
    try {
        const { rows } = yield database_1.pool.query("DELETE FROM users WHERE id = $1", [id]);
        console.log(rows);
        return res.status(200).json({ message: `user with id ${id} deleted` });
    }
    catch (error) {
        const e = error;
        console.log(e);
        return res.status(400).json({ Error: e.message, e });
    }
});
exports.deleteUser = deleteUser;
