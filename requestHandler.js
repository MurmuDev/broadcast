const dbfile = require('./db');

function all(callback)
{
  //enter database details here
  let options = {
    host: "localhost",
    user: "murmu",
    password : "murmu",
    database : "db"
  };

  //type query here
  let queryString  = "SELECT * FROM store";
  dbfile.runQuery(options,queryString,(err,result)=>{
    if(err)
     throw err;
    else
     callback(result);
  })

}

function upload(callback)
{
  console.log("upload called");
  let data = 'upload called';
  callback(data);
}


function getByMail(callback)
{
  console.log("get by mail called");
  let data = 'get by mail';
  callback(data);
}


//export here
exports.all = all;
exports.upload = upload;
exports.getByMail = getByMail;
