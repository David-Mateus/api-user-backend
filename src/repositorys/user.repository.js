// faz as operações com o banco de dados
import { prisma } from "../services/prisma";

// criar usuário
export const createUser = async (data) => {
    const user = await prisma.user.create({
        data,
        select:{
            id: true,
            username: true,
            password:false,
            
        }
    });
    return user;
}
// total de usuários
export const getAllUsers = async () => {
    const users = await prisma.user.findMany({
        select:{
            id: true,
            username: true,
            password:false,
            
        }
    })
    return users;
}
// excluir usuário
export const deleteUser = async(id) => {
    await prisma.user.delete({
        // where aqui serve para filtrar o usuário que será excluído
        where:{
            id
        }
    })
}