const fs = require('fs');


function renameFile(oldpath,newpath)
{
      fs.rename(oldpath,newpath,(err) => {
      if (err) throw err;
      else console.log('file moved successfully');
    });
}


exports.renameFile = renameFile;
