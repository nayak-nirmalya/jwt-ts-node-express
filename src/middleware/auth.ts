import { Request, Response, NextFunction } from "express";

const authenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.headers.authorization);
  next();
};

export { authenticationMiddleware };
