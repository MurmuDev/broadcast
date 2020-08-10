var mysql = require('mysql');


//run sql query here
//(mysql Options , mysql query ,callback)
function runQuery(options,queryString,callback)
{
  //enter user details here
  mysql.createConnection(options).query(queryString,(err,result)=>{
      callback(err,result);
  })

}




exports.runQuery = runQuery;
