function all()
{
  console.log("all called");
}

function upload()
{
  console.log("upload called");
}


function getByMail()
{
  console.log("get by mail called");
}


//export here
exports.all = all;
exports.upload = upload;
exports.getByMail = getByMail;
