require ('dotenv').config()

// SE CREAN LAS CONSTANTES PARA PODER EJECUTAR EL ARCHIVO DE FORMA LOCAL
// Y SE TRAE LA INFO DEL ARCHIVO JS SERVER.

const Server = require ('./servidorBorrador');
const server = new Server();
server.listen();