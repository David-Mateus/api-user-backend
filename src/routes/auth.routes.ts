import { autheticate } from "../controllers/auth.controller";

const authRoutes = (app: any) => {
    app.post("/auth", autheticate);
}
export default authRoutes;