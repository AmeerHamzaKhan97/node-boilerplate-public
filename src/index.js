const { read } = require("fs");
var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url==="/welcome"){
        res.writeHead(200,{
            "content-type":"text/plain"
        })
        res.write("welcome to Dominos!")
        res.end()
    }else if(req.url==="/contact"){
        res.writeHead(200,{
            "content-type":"application/json"
        })
        res.write(
          JSON.stringify({
            phone: "18602100000",
            email: "guestcaredominos@jublfood.com",
          })
        );
        res.end();
    }else{
        writehead(404)
    }

    res.end()
}

httpServer.listen(9090)

module.exports = httpServer;