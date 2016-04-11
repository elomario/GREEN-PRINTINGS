http = require('http');
fs = require('fs');
server = http.createServer( function(req, res) {

    console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
		console.log(req);
		 var destinationFile = fs.createWriteStream("public/static/bla.txt");
		 var a = req.pipe(destinationFile);
		/// console.log(a);
		 
		req.on('end',function(){
		 var html = fs.readFileSync('public/index.html');
        res.end(html);
		 });
    }
    else
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:8002">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        var html = fs.readFileSync('public/index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }

});

port = 8002;
host = '127.0.0.1';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);