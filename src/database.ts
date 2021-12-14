import { Pool } from "pg";

var pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "",
  database: "typescriptdatabase",
  port: 5432,
});
