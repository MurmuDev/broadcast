const formidable = require('formidable');


//function to parse HTML form
function parseForm(req,callback)
{
  //staring here
  console.log('started parsing form here');

  //creating formidable object
  let form = new formidable.IncomingForm();

  //parsing forms here
  form.parse(req,(err,fields,files)=>{
    if(err)
    {
      console.log(err.message);
      return;
    }

    console.log('form parsed successfully');

    //used the parsed information here
    callback(fields,files);
  })
}


//function to parse HTML form
function parseMessage(req,callback)
{
  //staring here
  console.log('started parsing form here');

  //creating formidable object
  let form = new formidable.IncomingForm();

  //parsing forms here
  form.parse(req,(err,fields,files)=>{
    if(err)
    {
      console.log(err.message);
      return;
    }

    console.log('form parsed successfully');

    //NOTE store the JSON fields into relevant file
    //used the parsed information here
    callback(fields,files);
  })
}


exports.parseForm = parseForm;
exports.parseMessage = parseMessage;
