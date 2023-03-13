import { Request, Response } from "express";

import { BadRequestError } from "../errors/index.js";

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please Provide E-Mail & Password!");
  }

  res.send("Fake LogIn/Register/SignUp Route.");
};

const dashboard = async (req: Request, res: Response) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, Nirmalya.`,
    secret: `Here Is Your Authorized Data. Your Lucky Number Is: ${luckyNumber}`
  });
};

export { login, dashboard };
