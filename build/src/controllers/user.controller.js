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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.getOne = exports.getAll = exports.create = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_validation_1 = require("../validations/user.validation");
const user_repository_1 = require("../repositorys/user.repository");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_validation_1.userValidation.validate(req.body);
        const hashedPassword = yield bcryptjs_1.default.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const user = yield (0, user_repository_1.createUser)(req.body);
        res.status(200).send(user);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
exports.create = create;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_repository_1.getAllUsers)();
        res.status(200).send(users);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_repository_1.getOneUsers)(Number(req.params.id));
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getOne = getOne;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, user_repository_1.deleteUser)(Number(req.params.id));
        res.status(200).send("Usuário excluído com sucesso!");
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.remove = remove;
