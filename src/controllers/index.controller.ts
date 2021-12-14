import { Request, Response } from "express";

var IndexController = {
  getUsers: (req: Request, res: Response) => {
    res.send("users");
  },
};

export default IndexController;
