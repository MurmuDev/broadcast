const fs = require('fs');
const readline = require('readline');

function renameFile(oldpath,newpath)
{
      fs.rename(oldpath,newpath,(err) => {
      if (err) throw err;
      else console.log('file moved successfully');
    });
}



//callback(eachLine)
function readLine(path,callback)
{
  readline.createInterface({
    input : fs.createReadStream(path),
    output:process.stdout,
    terminal:false
  }).on('line',(line)=>{
    callback(line)
  });
}

exports.renameFile = renameFile;
exports.readLine = readLine;
