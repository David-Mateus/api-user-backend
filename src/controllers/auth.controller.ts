import { prisma } from "../services/prisma";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
export const autheticate = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      return res
        .status(400)
        .send({ message: "Username and password are required!" });
    }
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });
    if (!user) {
      return res.status(401).send({ message: "Invalid username or password" });
    }
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          id: user.id,
          username: user.username,
        },
        String(process.env.TOKEN_KEY),
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).send({ token });
    } else {
      return res
        .status(401)
        .send({ message: "Username and password are required!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
