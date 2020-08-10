//dependencies
const http = require('http'),
      url = require('url');


//change port here
const PORT = 5000;

//starting server
function start(handle,route)
{
  http.createServer((req,res) => {

    //get the path
    var urlParsed = url.parse(req.url);
    console.log("Request received :",urlParsed.pathname);

    //pass router function the pathname
    //example for dataobj{
    //                    data : "this is data",
    //                    type : "application/json",
    //                    HTTPcode : 404
    //                    }
    route(handle,urlParsed,(dataobj)=>{

      //use response object here
      res.writeHead(dataobj.HTTPcode,{"content-type":dataobj.type});
      res.write(JSON.stringify(dataobj.data));
      res.end();
    });
  }).listen(PORT,()=>{
    console.log("Server listening on port :",PORT);
  });
}


exports.start = start;
