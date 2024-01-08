// faz as operações com o banco de dados
import { prisma } from "../services/prisma";
import User from "../types/user.types";
// criar usuário
export const createUser = async (data: User) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      username: true,
    },
  });
  return user;
};
// total de usuários
export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
    },
  });
  return users;
};
// retorna usuario pelo id
export const getOneUsers = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      username: true,
    },
  });
  return user;
};
// excluir usuário
export const deleteUser = async (id: number) => {
  await prisma.user.delete({
    // where aqui serve para filtrar o usuário que será excluído
    where: {
      id,
    },
  });
};
