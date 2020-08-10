//main routing function
function route(handler,urlParsed,callback)
{
  console.log("Processing request for :",urlParsed.pathname);
  if(typeof handler[urlParsed.pathname] === 'function')
   handler[urlParsed.pathname](callback,urlParsed);
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
