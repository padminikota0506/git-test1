const http = require('http')
http.createServer((req, res) => {
    res.write("Hello this is padmini from NodeJS");
    res.end();
}).listen(5000, () => {
    console.log('Server is running at port 5000');
})