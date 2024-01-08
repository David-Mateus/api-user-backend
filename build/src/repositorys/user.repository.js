"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getOneUsers = exports.getAllUsers = exports.createUser = void 0;
// faz as operações com o banco de dados
const prisma_1 = require("../services/prisma");
// criar usuário
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.user.create({
        data,
        select: {
            id: true,
            username: true,
        },
    });
    return user;
});
exports.createUser = createUser;
// total de usuários
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.prisma.user.findMany({
        select: {
            id: true,
            username: true,
        },
    });
    return users;
});
exports.getAllUsers = getAllUsers;
// retorna usuario pelo id
const getOneUsers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.user.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            username: true,
        },
    });
    return user;
});
exports.getOneUsers = getOneUsers;
// excluir usuário
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.user.delete({
        // where aqui serve para filtrar o usuário que será excluído
        where: {
            id,
        },
    });
});
exports.deleteUser = deleteUser;
