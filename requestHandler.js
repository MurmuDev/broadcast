const dbfile = require('./db'),
      fileHandling = require('./fileHandling');
      parser = require('./parser')
      fs = require('fs');


//get all data from key table
function allKey(resCallback)
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
     resCallback({
       data: result,
       type: "application/json",
       HTTPcode : 200
     });
  })

}


//upload message
function uploadMessage(resCallback,urlParsed,req)
{
  parser.parseForm(req,

  (fields,files)=>{
    let oldpath = files.file.path;
    let dateString = new Date().toISOString();

    //getting home directory below
    //const homedir = require('os').homedir();

    //set new address here
    //path must be accessible for the database server
    let newpath = '/var/lib/mysql-files/message'+'/'+dateString;

    //moving upload file from temp
    fileHandling.renameFile(oldpath,newpath);

  },

  callback({
    data : '',
    type : 'text/plain',
    HTTPcode :204
  }))
}



//gets the request object from the client and parsed the form
function uploadKey(resCallback,urlParsed,req)
{
   parser.parseForm(req,

     (fields,files)=>{
       let oldpath = files.file.path;


              let dateString = new Date().toISOString();

              //getting home directory below
              //const homedir = require('os').homedir();

              //set new address here
              //path must be accessible for the database server
              let newpath = '/var/lib/mysql-files/key'+'/'+dateString;



       //moving upload file from temp
       fileHandling.renameFile(oldpath,newpath);
     },
   //callback for the response object
   resCallback({
     data : '',
     type : 'text/plain',
     HTTPcode : 204
   }));
}

//get fields by mail url parameter
function getByMail(resCallback,urlParsed)
{
  //enter database details here
  let options = {
    host: "localhost",
    user: "murmu",
    password : "murmu",
    database : "db"
  };


  //get urls query here
  let params = new URLSearchParams(urlParsed.query);
  let mail = params.get("mail");
  let code = 200;

  //checking if no url parameters passed
  if(mail === undefined)
    {
      code = 404;
      mail = "";
    }

  //getSingle(  [field1, field2, field3..... ], tablename , [ where1 = 'whereval1' , where2 = 'whereval2' ....],callback(err,result))
  dbfile.getSingle(options,['id','email','file'],'public',['email = '+`'`+mail.toString()+`'`],(err,result)=>{
    if(err)
     throw err;
    else
     resCallback({
       data: result,
       type: "application/json",
       HTTPcode : code
     });
  })


  console.log(params);

}


//get message by mail
function messageByMail(resCallback,urlParsed)
{
  //enter database details here
  let options = {
    host: "localhost",
    user: "murmu",
    password : "murmu",
    database : "db"
  };


  //get url query here
  let params = new URLSearchParams(urlParsed.query);
  let mail = params.get("mail");
  let code = 200;

  //checking if no url parameters passed
  if(mail === undefined)
    {
      code = 404;
      mail = "";
    }

    console.log(mail);

  //getSingle(  [field1, field2, field3..... ], tablename , [ where1 = 'whereval1' , where2 = 'whereval2' ....],callback(err,result))
  dbfile.getSingle(options,['message'],'messages',['email = '+`'`+mail.toString()+`'`],(err,result)=>{
    if(err)
     throw err;
    else
     resCallback({
       data: result,
       type: "application/json",
       HTTPcode : code
     });
  })
}


function getMessage()
{
  
}
//export here
exports.allKey = allKey;
exports.uploadKey = uploadKey;
exports.getByMail = getByMail;
exports.messageByMail = messageByMail;
