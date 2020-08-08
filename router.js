//main routing function
function route(handler,pathname,callback)
{
  console.log("Processing request for :",pathname);
  if(typeof handler[pathname] === 'function')
   handler[pathname](callback);
  else
   console.log('Function named "'+pathname.slice(1)+'" not found');
}

exports.route = route;
