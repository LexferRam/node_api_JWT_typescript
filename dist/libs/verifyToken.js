"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.TokenValidation = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token)
        return res.status(401).json("Acccess denied");
    const payload = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET || "tokentest");
    //console.log(payload);
    req.userId = payload._id;
    //hay que extender la interfaz desde types.d.ts
    next();
};
//# sourceMappingURL=verifyToken.js.map