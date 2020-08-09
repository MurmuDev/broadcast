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
    var pathname = url.parse(req.url).pathname;
    console.log("Request received :",pathname);

    //pass router function the pathname
    //data is GET / POSTed data
    route(handle,pathname,(data)=>{

      //use response object here
      res.writeHead(200,{"content-type":"application/JSON"});
      res.write(JSON.stringify(data));
      res.end();
    });
  }).listen(PORT,()=>{
    console.log("Server listening on port :",PORT);
  });
}


exports.start = start;
