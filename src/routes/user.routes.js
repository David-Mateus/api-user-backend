import {create, getAll, remove} from "../controllers/user.controller";
import {createPosters} from "../controllers/poster.controller";

const userRoutes = (app) => {
    app.post("/user", create);
    app.post("/poster", createPosters);
    app.get("/user", getAll);
    app.delete("/user/:id", remove);
}
export default userRoutes;