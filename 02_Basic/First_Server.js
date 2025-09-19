import http from 'http'

http.createServer((req, res) => {
    res.write("<h1>Hello this is my first server</h1>");
    res.end();
}).listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});