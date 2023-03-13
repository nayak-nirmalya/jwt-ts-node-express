import CustomAPIError from "../errors/custom-error.js";
import { StatusCodes } from "http-status-codes";

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message, StatusCodes.BAD_REQUEST);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequest;
