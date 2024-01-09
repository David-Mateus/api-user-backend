import  jwt  from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
export const verifyToken = (req: Request, res: Response, next: any) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).send({message: "No token provided!"});
    }
    try {
        const replace = token.replace("Bearer ", "");
        jwt.verify(replace, String(process.env.TOKEN_KEY));
        next();
    } catch (e) {
        res.status(401).send({message: "Unauthorized!"});
    }
}