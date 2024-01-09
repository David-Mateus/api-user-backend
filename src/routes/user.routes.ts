import { create, getAll, remove, getOne } from "../controllers/user.controller";
import {
  createPosters,
  getAllPoster,
  getOnePosters,
  putPosters,
  deletePosters,
} from "../controllers/poster.controller";
import { verifyToken } from "../middlewares/auth";
const userRoutes = (app: any) => {
  app.post("/user", create);
  //(ROTA, RODA PRIVADA)
  app.post("/poster", verifyToken, createPosters);
  app.get("/user",verifyToken, getAll);
  app.get("/user/:id",verifyToken, getOne);
  app.get("/poster",verifyToken, getAllPoster);
  app.get("/poster/:id",verifyToken, getOnePosters);
  app.put("/poster/:id",verifyToken, putPosters);
  app.delete("/user/:id",verifyToken, remove);
  app.delete("/poster/:id",verifyToken, deletePosters);
};
export default userRoutes;
