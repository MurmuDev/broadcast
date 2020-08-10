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
     callback({
       data: result,
       type: "application/json",
       HTTPcode : 200
     });
  })

}

function upload(callback)
{
  console.log("upload called");
  let data = 'upload called';
  callback({
    data : data,
    type : "text/plain",
    HTTPcode : 200
  });
}


function getByMail(callback,urlParsed)
{
  //enter database details here
  let options = {
    host: "localhost",
    user: "murmu",
    password : "murmu",
    database : "db"
  };


  //type query here
  let params = new URLSearchParams(urlParsed.query);
  let mail = params.get("mail");
  let code = 200;

  //checking if no url parameters passed
  if(mail === undefined)
    {
      code = 404;
      mail = "";
    }

   let queryString  = "SELECT * FROM store where email="+"\""+mail+"\"";


  dbfile.runQuery(options,queryString,(err,result)=>{
    if(err)
     throw err;
    else
     callback({
       data: result,
       type: "application/json",
       HTTPcode : code
     });
  })


  console.log(params);

}


//export here
exports.all = all;
exports.upload = upload;
exports.getByMail = getByMail;
