var mysql = require('mysql');


//connect sql here
//get sql object
function connect()
{
  //enter user details here
  var con = mysql.createConnection({
    host: "localhost",
    user: "murmu",
    password : "murmu",
    database : "db"
  })

  return con;
}


//execute a query for SQL connection
function runQuery(db,sqlQuery)
{
    db.connect((err)=>{
      if(err)
      {
        console.log(err);
        throw err;
      }

      db.query(sqlQuery,(err,result)=>{
        if(err)
        {
          console.log(err);
          throw err;
        }
        return result;
      });
    });
}

var con = connect();

runQuery(con,"SELECT id,email,file FROM store",()=>{
  console.log("Query was run");
});



exports.connect = connect;
exports.runQuery = runQuery;
