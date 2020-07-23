const server = require('./server');
const router = require('./router');
const requestHandler  = require('./requestHandler');
const db = require('./db');

var handle = {};
handle["/"] = requestHandler.all;
handle["/all"] = requestHandler.all;
handle["/upload"] = requestHandler.upload;
handle["/getByMail"] = requestHandler.getByMail;

var dbobj = db.connect();
server.start(handle,router.route,dbobj);
