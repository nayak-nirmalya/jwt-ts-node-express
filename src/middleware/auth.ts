import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { DecodeType } from "src/controllers/main.js";
import { CustomAPIError, UnauthenticatedError } from "../errors/index.js";

const authenticationMiddleware = async (
  req: Request & { user: { id: number; username: string } },
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No Token Detected!");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { id, username } = decoded as DecodeType;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not Authorized / Verification Failed!");
  }
};

export { authenticationMiddleware };
