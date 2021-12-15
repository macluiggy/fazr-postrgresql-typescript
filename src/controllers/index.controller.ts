import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../database";
export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> /* dado que la funcion es asincrona se va a devolver una respuesta despues de que se cumpla la promesa */ => {
  // res.send("users");
  try {
    const { rows }: QueryResult = await pool.query("SELECT * FROM users");
    console.log(rows);
    return res.status(200).json(rows);
  } catch (error: unknown) {
    const e = error as ErrorEvent;
    console.log(e);

    return res.status(400).json({ Error: e.message, e });
  }
};
export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> /* dado que la funcion es asincrona se va a devolver una respuesta despues de que se cumpla la promesa */ => {
  // res.send("users");
  const { id } = req.params;
  try {
    const { rows }: QueryResult = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [id]
    );
    console.log(rows);
    return res.status(200).json(rows);
  } catch (error: unknown) {
    const e = error as ErrorEvent;
    console.log(e);

    return res.status(400).json({ Error: e.message, e });
  }
};
export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> /* dado que la funcion es asincrona se va a devolver una respuesta despues de que se cumpla la promesa */ => {
  // res.send("users");
  const { name, email } = req.body;
  try {
    const { rows }: QueryResult = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2)",
      [name, email]
    );
    console.log(rows);
    return res
      .status(200)
      .json({ message: "User created", user: { name, email } });
  } catch (error: unknown) {
    const e = error as ErrorEvent;
    console.log(e);

    return res.status(400).json({ Error: e.message, e });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> /* dado que la funcion es asincrona se va a devolver una respuesta despues de que se cumpla la promesa */ => {
  // res.send("users");
  const { name, email } = req.body;
  const { id } = req.params;
  try {
    const { rows }: QueryResult = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3",
      [name, email, id]
    );
    console.log(rows);
    return res
      .status(200)
      .json({ message: "User updated", user: { name, email } });
  } catch (error: unknown) {
    const e = error as ErrorEvent;
    console.log(e);

    return res.status(400).json({ Error: e.message, e });
  }
};
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> /* dado que la funcion es asincrona se va a devolver una respuesta despues de que se cumpla la promesa */ => {
  // res.send("users");
  const { id } = req.params;
  try {
    const { rows }: QueryResult = await pool.query(
      "DELETE FROM users WHERE id = $1",
      [id]
    );
    console.log(rows);
    return res.status(200).json({ message: `user with id ${id} deleted` });
  } catch (error: unknown) {
    const e = error as ErrorEvent;
    console.log(e);

    return res.status(400).json({ Error: e.message, e });
  }
};
