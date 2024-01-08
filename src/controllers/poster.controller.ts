import {
  createPoster,
  getAllPosters,
  getOnePoster,
  putPoster,
  deletePoster,
} from "../repositorys/poster.repository";
import { posterValidation } from "../validations/poster.validation";
import { Request, Response } from "express";
export const createPosters = async (req: Request, res: Response) => {
  try {
    await posterValidation.validate(req.body);
    const { title, content, singerUsername } = req.body;
    const poster = await createPoster({ title, content, singerUsername });
    res.status(200).send(poster);
  } catch (e) {
    res.status(400).send(e);
  }
};
export const getAllPoster = async (req: Request, res: Response) => {
  try {
    const posters = await getAllPosters();
    res.status(200).send(posters);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const getOnePosters = async (req: Request, res: Response) => {
  try {
    const posrt = await getOnePoster(Number(req.params.id));
    res.status(200).send(posrt);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const putPosters = async (req: Request, res: Response) => {
  try {
    const poster = await putPoster(Number(req.params.id), req.body);
    res.status(200).send(poster);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const deletePosters = async (req: Request, res: Response) => {
  try {
    await deletePoster(Number(req.params.id));
    res.status(200).send("Poster excluído com sucesso!");
  } catch (error) {
    res.status(400).send(error);
  }
};
