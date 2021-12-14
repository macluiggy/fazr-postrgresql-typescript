"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
var pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    password: "",
    database: "typescriptdatabase",
    port: 5432,
});
