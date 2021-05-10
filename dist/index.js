"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//luego de instalar npm i typescript, ejecutar el sig codigo: npx tsc --init,
//elcual crea un archivo de configuracion de typescript
//para convertir el ts a js ejecutar: npx tsc
//console.log('hello lex');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
require("./database");
function main() {
    app_1.default.listen(app_1.default.get("port"));
    console.log("Server on port ", app_1.default.get("port"));
}
main();
//# sourceMappingURL=index.js.map