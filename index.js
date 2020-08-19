const server = require('./server');
const router = require('./router');
const requestHandler  = require('./requestHandler');
const db = require('./db');


//define end points here
var handle = {};
handle["/"] = requestHandler.allKey;
handle["/all"] = requestHandler.allKey;
handle["/uploadKey"] = requestHandler.uploadKey;
handle["/getByMail"] = requestHandler.getByMail;
handle["/messageByMail"] = requestHandler.messageByMail;


//starting the server
server.start(handle,router.route);
