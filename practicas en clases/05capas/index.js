require ('dotenv').config()

const Server = require ('./servidorBorrador');
const server = new Server();
server.listen();