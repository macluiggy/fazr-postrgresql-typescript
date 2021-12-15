import { Pool } from "pg";

export var pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "",
  database: "typescriptdatabase",
  port: 5432,
});
