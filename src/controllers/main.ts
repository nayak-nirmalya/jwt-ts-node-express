import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import {
  BadRequestError,
  CustomAPIError,
  UnauthenticatedError
} from "../errors/index.js";

interface DecodeType {
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

const dashboard = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No Token Detected!");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hello, ${(decoded as DecodeType).username.toUpperCase()}.`,
      secret: `Here Is Your Authorized Data. Your Lucky Number Is: ${luckyNumber}`
    });
  } catch (error) {
    throw new UnauthenticatedError("Not Authorized!");
  }
};

export { login, dashboard };
