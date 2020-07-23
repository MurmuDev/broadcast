//dependencies
const http = require('http'),
      url = require('url');


//change port here
const PORT = 5000;

//starting server
function start(handle,route)
{
  http.createServer((req,res) => {
    var pathname = url.parse(req.url).pathname; //get the path
    console.log("Request received :",pathname);

    route(handle,pathname); //pass router function the pathname

    res.writeHead(200,{"content-type":"text/plain"});
    res.write("Hello World");
    res.end();
  }).listen(PORT,()=>{
    console.log("Server listening on port :",PORT);
  });
}


exports.start = start;
