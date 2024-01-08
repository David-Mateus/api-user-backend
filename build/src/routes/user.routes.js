"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const poster_controller_1 = require("../controllers/poster.controller");
const userRoutes = (app) => {
    app.post("/user", user_controller_1.create);
    app.post("/poster", poster_controller_1.createPosters);
    app.get("/user", user_controller_1.getAll);
    app.get("/user/:id", user_controller_1.getOne);
    app.get("/poster", poster_controller_1.getAllPoster);
    app.get("/poster/:id", poster_controller_1.getOnePosters);
    app.put("/poster/:id", poster_controller_1.putPosters);
    app.delete("/user/:id", user_controller_1.remove);
    app.delete("/poster/:id", poster_controller_1.deletePosters);
};
exports.default = userRoutes;
