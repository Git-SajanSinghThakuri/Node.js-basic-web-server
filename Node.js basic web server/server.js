// Once we have installed Node.js, let's build our first web server. Create a file named server.js containing the following contents:

let http = require("http")

let myServer = http.createServer(function(req, res){
    if(req.url == "/"){
        res.end("Hello, and welcome to our home page.")
    }
    if(req.url == "/about"){
        res.end("Thank You for showing interest in our company.")
    }
    res.end("We cannot find the page you are looking for.")
})

myServer.listen(3000)


// Now, On your terminal  run your web server using node server(here server is our file name you may have your own file)
// Visit http://localhost:3000 and you will see a message saying "Hello, and welcome to our home page.".