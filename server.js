var fs=require('fs');
var http=require('http');
var server=http.createServer(function (req,res) {

  if(req.url=="/"){
     let data= fs.readFileSync('home.html','utf8');
     res.end(data);
  }

  
  

});


server.listen(3000);
console.log("Server Run Success");