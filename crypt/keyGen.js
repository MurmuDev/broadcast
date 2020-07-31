const crypto = require('crypto')
const fs = require('fs');
const path = require('path');


function toFile(filename,str)
{
  //add permitted path below
  //e.g /home <username>
  fs.writeFile(filename,str,(err) =>{
    if(err)
     console.log(err);
    else
     console.log('file saved');
  });
}


//add support for key options
//callback(publickey,privatekey)
function generatePair(callback)
{
  crypto.generateKeyPair('rsa',{
    modulusLength : 2048,
    publicExponenet : 0x10001,


    publicKeyEncoding:{
      type : 'pkcs1',
      format : 'pem'
    },

    privateKeyEncoding:{
      type: 'pkcs8',
      format : 'pem',
      cipher : 'aes-192-cbc',
      passphrase : 'pass'
    }}

    ,(err,publicKey,privateKey) => {
      if(err)
       console.log(err);
      else
       {
         callback(publicKey,privateKey);
       }
    }
  )};


generatePair((public,private)=>{
  if(typeof public == 'buffer')
   public = public.toString();
  if(typeof private == 'buffer')
   private = private.toString();
  toFile('PUBLIC',public);
  toFile('PRIVATE',private);
})
