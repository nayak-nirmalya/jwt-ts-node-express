import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { BadRequestError } from "../errors/index.js";

export interface DecodeType {
  id: number;
  username: string;
  iat: number;
  exp: number;
}

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please Provide E-Mail & Password!");
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });

  res.status(200).json({
    msg: "User Created!",
    token
  });
};

const dashboard = async (
  req: Request & { user: { id: number; username: string } },
  res: Response
) => {
  const { id, username } = req.user;
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${username.toUpperCase()}.`,
    secret: `Here Is Your Authorized Data. Your Lucky Number Is: ${luckyNumber}`
  });
};

export { login, dashboard };
