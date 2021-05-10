//luego de instalar npm i typescript, ejecutar el sig codigo: npx tsc --init,
//elcual crea un archivo de configuracion de typescript
//para convertir el ts a js ejecutar: npx tsc
//console.log('hello lex');
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import "./database";

function main() {
  app.listen(app.get("port"));
  console.log("Server on port ", app.get("port"));
}

main();
