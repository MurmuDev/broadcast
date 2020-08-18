const dbfile = require('./db'),
      fileHandling = require('./fileHandling');


function all(callback)
{
  //enter database details here
  let options = {
    host: "localhost",
    user: "murmu",
    password : "murmu",
    database : "db"
  };



  dbfile.getAllData(options,['id','email','file'],'public',(err,result)=>{
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


function uploadKey(callback,urlParsed,req)
{



   console.log('starting to parse form');

   //edit fileJSON here
   let fileJSON = {
     newpath : '/home/murmu/'
   }


   fileHandling.moveFile(req,fileJSON,callback);
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


  dbfile.getSingle(options,['id','email','file'],'public',['mail = '+`'`+toString(mail)+`'`],(err,result)=>{
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
exports.uploadKey = uploadKey;
exports.getByMail = getByMail;
