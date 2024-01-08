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
exports.deletePosters = exports.putPosters = exports.getOnePosters = exports.getAllPoster = exports.createPosters = void 0;
const poster_repository_1 = require("../repositorys/poster.repository");
const poster_validation_1 = require("../validations/poster.validation");
const createPosters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield poster_validation_1.posterValidation.validate(req.body);
        const { title, content, singerUsername } = req.body;
        const poster = yield (0, poster_repository_1.createPoster)({ title, content, singerUsername });
        res.status(200).send(poster);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.createPosters = createPosters;
const getAllPoster = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posters = yield (0, poster_repository_1.getAllPosters)();
        res.status(200).send(posters);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getAllPoster = getAllPoster;
const getOnePosters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posrt = yield (0, poster_repository_1.getOnePoster)(Number(req.params.id));
        res.status(200).send(posrt);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getOnePosters = getOnePosters;
const putPosters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const poster = yield (0, poster_repository_1.putPoster)(Number(req.params.id), req.body);
        res.status(200).send(poster);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.putPosters = putPosters;
const deletePosters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, poster_repository_1.deletePoster)(Number(req.params.id));
        res.status(200).send("Poster excluído com sucesso!");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.deletePosters = deletePosters;
