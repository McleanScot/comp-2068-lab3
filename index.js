let http = require('http');
let url = require('url');

http.createServer(function(request, response){
  let qs = url.parse(request.url, true).query;
  let method = qs.method;
  let x = qs.x;
  let y = qs.y;


let z =0;
  switch (method) {
    case 'add':
    z=  parseInt(x)+parseInt(y);
      response.write(x+ " + " +y + " = " + z);response.end();
      break;
    case "subtract":
    z=  parseInt(x)-parseInt(y);
      response.write(x+ " - " +y + " = " + z); response.end();
      break;
    case "divide":
    z=  parseInt(x)/parseInt(y);
      response.write(x+ " / " +y + " = " + z); response.end();
      break;
    case "multiply":
    z=  parseInt(x)*parseInt(y);
      response.write(x+ " X " +y + " = " + z); response.end();
      break;
    default: response.write("that is not an acceptable value for method!"); response.end();

}
}).listen(3000);
console.log('lab3 on 3000')
