import express, { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
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
