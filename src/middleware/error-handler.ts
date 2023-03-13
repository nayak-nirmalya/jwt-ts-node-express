import { Request, Response, NextFunction } from "express";
import CustomAPIError from "../errors/custom-error.js";

const errorHandlerMiddleware = async (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({
      msg: err.message
    });
  }

  return res
    .status(500)
    .json({ msg: "Something Went Wrong, Please Try Again!" });
};

export default errorHandlerMiddleware;
