import bcrypt from "bcryptjs";
import { createUser, getAllUsers,deleteUser } from "../repositorys/user.repository";
export const create = async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const user = await createUser(req.body);
        res.status(200).send(user);
    }catch(err){
        res.status(400).send(err);
    }
}
export const getAll = async (req, res) => {
    try{
        const users = await getAllUsers();
        res.status(200).send(users);
    }catch(e){
        res.status(400).send(e);
    }
}
export const remove = async (req, res) => {
    try{
        await deleteUser(Number(req.params.id));
        res.status(200).send("Usuário excluído com sucesso!");
    }catch(e){
        res.status(400).send(e);
    }
}