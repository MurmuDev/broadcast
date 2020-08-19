//main routing function
function route(handler,urlParsed,callback,req)
{
  console.log("Processing request for :",urlParsed.pathname);

  //calling function from requestHandler
  if(typeof handler[urlParsed.pathname] === 'function')
   handler[urlParsed.pathname](callback,urlParsed,req);
  else
   {
     (()=>{
       let data = 'no function found';
       callback({
         data : data,
         type : "text/plain",
         HTTPcode : 400
       })
     })();
   }
}

exports.route = route;
