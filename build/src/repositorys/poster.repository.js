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
exports.deletePoster = exports.putPoster = exports.getOnePoster = exports.getAllPosters = exports.createPoster = void 0;
const prisma_1 = require("../services/prisma");
const createPoster = ({ title, content, singerUsername }) => __awaiter(void 0, void 0, void 0, function* () {
    const poster = yield prisma_1.prisma.poster.create({
        data: {
            title,
            content,
            user: { connect: { username: singerUsername } },
        },
    });
    return poster;
});
exports.createPoster = createPoster;
const getAllPosters = () => __awaiter(void 0, void 0, void 0, function* () {
    const posters = yield prisma_1.prisma.poster.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            user: {
                select: {
                    id: true,
                    username: true,
                    password: false,
                },
            },
        },
    });
    return posters;
});
exports.getAllPosters = getAllPosters;
const getOnePoster = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const posrt = yield prisma_1.prisma.poster.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            title: true,
            content: true,
            user: {
                select: {
                    id: true,
                    username: true,
                    password: false,
                },
            },
        },
    });
    return posrt;
});
exports.getOnePoster = getOnePoster;
const putPoster = (id, { title, content }) => __awaiter(void 0, void 0, void 0, function* () {
    const poster = yield prisma_1.prisma.poster.update({
        where: {
            id,
        },
        data: {
            title,
            content,
        },
    });
    return poster;
});
exports.putPoster = putPoster;
const deletePoster = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.poster.delete({
        where: {
            id,
        },
    });
});
exports.deletePoster = deletePoster;
