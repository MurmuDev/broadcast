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


exports.parseForm = parseForm;
