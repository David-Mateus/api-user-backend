"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// prisma client se conecta com o banco de dados
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
