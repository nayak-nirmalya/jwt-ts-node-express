import CustomAPIError from "../errors/custom-error.js";
import { StatusCodes } from "http-status-codes";

class BadRequest extends CustomAPIError {
  statusCode: StatusCodes;

  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequest;
