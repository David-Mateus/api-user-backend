import bcrypt from "bcryptjs";
import { userValidation } from "../validations/user.validation";
import {
  createUser,
  getAllUsers,
  deleteUser,
  getOneUsers,
} from "../repositorys/user.repository";
import { Request, Response } from "express";
export const create = async (req: Request, res: Response) => {
  try {

    await userValidation.validate(req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    const user = await createUser(req.body);
    res.status(200).send(user);

  } catch (err) {
    res.status(400).send(err);
  }
};
export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
};
export const getOne = async (req: Request, res: Response) => {
  try {
    const user = await getOneUsers(Number(req.params.id));
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const remove = async (req: Request, res: Response) => {
  try {
    await deleteUser(Number(req.params.id));
    res.status(200).send("Usuário excluído com sucesso!");
  } catch (e) {
    res.status(400).send(e);
  }
};
