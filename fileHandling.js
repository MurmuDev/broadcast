const formidable = require('formidable');
var http = require('http');
var fs = require('fs');


function moveFile(req,fileJSON,callback)
{
  //declaring formidable form parser
  let form = new formidable.IncomingForm();

  form.parse(req,(err, fields, files) => {
    if(err)
    {
      console.log(err.message);
      return;
    }

    console.log('form parsed successfully');

    //change file address
    let oldpath = files.file.path;
    let newpath = fileJSON.newpath+files.file.name;

    //changing file
    fs.rename(oldpath,newpath,(err) => {
      if (err) throw err;
      else console.log('file moved successfully');
    });
});

  callback({
    data : '',
    type : 'text/plain',
    HTTPcode : 204
  });
}

exports.moveFile = moveFile;
