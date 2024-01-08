import { create, getAll, remove, getOne } from "../controllers/user.controller";
import {
  createPosters,
  getAllPoster,
  getOnePosters,
  putPosters,
  deletePosters,
} from "../controllers/poster.controller";

const userRoutes = (app: any) => {
  app.post("/user", create);
  app.post("/poster", createPosters);
  app.get("/user", getAll);
  app.get("/user/:id", getOne);
  app.get("/poster", getAllPoster);
  app.get("/poster/:id", getOnePosters);
  app.put("/poster/:id", putPosters);
  app.delete("/user/:id", remove);
  app.delete("/poster/:id", deletePosters);
};
export default userRoutes;
