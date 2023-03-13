import "dotenv/config";

import express, { Application, Request, Response } from "express";
import "express-async-errors";

import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

const app: Application = express();

// middleware
app.use(express.static("./src/public"));
app.use(express.json());

// routes

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();
