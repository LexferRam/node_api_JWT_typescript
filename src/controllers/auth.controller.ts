import { Request, Response, json } from "express";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  //guardando el usuario
  const user: IUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  user.password = await user.encryptPassword(user.password);

  const savedUser = await user.save();
  //creando el token
  const token: string = jwt.sign(
    { _id: savedUser._id },
    process.env.TOKEN_SECRET || "tokentest"
  );

  res.header("auth-token", token).json(savedUser);
};

export const signin = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json("Email or password is wrong");

  const correctPassword: boolean = await user.validatePassword(
    req.body.password
  );
  if (!correctPassword) return res.status(400).json("Invalid Password");

  const token: string = jwt.sign(
    { _id: user._id },
    process.env.TOKEN_SECRET || "tokentest",
    {
      expiresIn: 60 * 60 * 24,
    }
  );

  res.header("auth-token", token).json(user);
};

export const profile = async (req: Request, res: Response) => {
  const user = await User.findById(req.userId, { password: 0 });
  if (!user) return res.status(404).json("No user found");

  res.json(user);
};

export const privateRoute = (req: Request, res: Response) => {
  res.send("Private");
};
