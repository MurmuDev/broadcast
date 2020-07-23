//main routing function
function route(handler,pathname)
{
  console.log("Processing request for :",pathname);
  if(typeof handler[pathname] === 'function')
   handler[pathname]();
  else
   console.log('Function name "'+handler.slice(1)+'" not found');
}

exports.route = route;
