var mysql = require('mysql');

//NOTE:for testing only
//run any sql query here
//(mysql Options , mysql query ,callback)
function runQuery(options,queryString,callback)
{
  //enter user details here
  mysql.createConnection(options).query(queryString,(err,result)=>{
      callback(err,result);
  })

}


//get data for field(s) from a table
//(mysql options object,field array,tablename,callback)
function getAllData(options,fields,table,callback)
{
  let fieldString = fields.join(',');

  let queryString = "SELECT"+" "+fieldString+" "+"FROM"+" "+table;

  mysql.createConnection(options).query(queryString,(err,result)=>{
    callback(err,result)
  });

}

//where = [ field1=value1 , field2=value2.....]
function getSingle(options,fields,table,where,callback)
{
  let fieldString = fields.join(',');
  let whereString = where.join('AND');
  let queryString = "SELECT"+" "+fieldString+" "+"FROM"+" "+table+" WHERE "+whereString;


  mysql.createConnection(options).query(queryString,(err,result)=>{
    callback(err,result)
  })
}

// exports.runQuery = runQuery;
exports.getAllData = getAllData;
exports.getSingle = getSingle;
