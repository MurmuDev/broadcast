const server = require('./server');
const router = require('./router');
const requestHandler  = require('./requestHandler');
const db = require('./db');


//define end points here
var handle = {};
handle["/"] = requestHandler.all;
handle["/all"] = requestHandler.all;
handle["/uploadKey"] = requestHandler.uploadKey;
handle["/getByMail"] = requestHandler.getByMail;


server.start(handle,router.route);
