//support needed for reading files through command-line arguments
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

//Parsing Command-Line Arguments Here
const yargs = require('yargs');
yargs.command({
  command: 'encrypt',
  describe: 'Encrypts the given file with given key \
             For example :\
             decrypt --key=<keyName> --file=<FileName>',
  builder:{
     key:{
       describe : 'Key to be used for encryption',
       demandOption : true,
       type: 'string'
     },
     file:{
       describe : 'File to be encrypted',
       demandOption : true,
       type : 'string'
     }
  },

  handler(argv)
  {
    encryptMessage(argv.file,argv.key,(encrypted)=>{
      binToFile('encrypted',encrypted);
    })
  }
}).command({
  command: 'decrypt',
  describe: 'Decrypts the given file with given key \
             For example :\
             decrypt --key=<keyName> --file=<encryptedFileName>',
  builder:{
     key:{
       describe : 'Key to be used for decryption ',
       demandOption : true,
       type: 'string'
     },
     file:{
       describe : 'File to be decrypted',
       demandOption : true,
       type : 'string'
     }
  },

  handler(argv)
  {
    decryptMessage(argv.file,argv.key,(decrypted)=>{
      console.log(decrypted.toString());
    });
  }
})
  .help()
  .alias('help','h')
  .argv;
yargs.parse();






//callback(error,data)
function fileToBin(filename,callback)
{
  fs.readFile(filename,(err,data)=>{
    callback(err,data)
  });
}


//callback(error)
function binToFile(filename,buffer)
{
  fs.writeFile(filename,buffer,(err)=>{
    if(err)
     console.log(err);
    else
     console.log(`file named \"${filename}\" written`);;
  });
}

//encryptedMessage
function encryptMessage(messageFile,keyFile,callback)
{
  //ATTENTION CALLBACK HELL!!!
  //callbacks for getting two file buffers
  fileToBin(messageFile,(err,messageBuffer)=>{   //first call back for message file
    if(err)
     console.log(err);
    else
     {
       fileToBin(keyFile,(err,keyBuffer)=>{  //second call back for key file
         if(err)
          console.log(err);
         else
          {
              callback(
                crypto.privateEncrypt({
                  key : keyBuffer,
                  passphrase : 'pass'
                },
              messageBuffer)
            );
          }
       });

     }
  });
}


//decryptedMessage
function decryptMessage(messageFile,keyFile,callback)
{
  fileToBin(messageFile,(err,messageBuffer)=>{
    if(err)
     console.log(err);
    else
     {

       fileToBin(keyFile,(err,keyBuffer)=>{
         if(err)
          console.log(err);
         else
         {
           callback(crypto.publicDecrypt(keyBuffer,messageBuffer));
         }
       });
     }
  });
}
