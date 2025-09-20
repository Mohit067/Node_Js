import http from 'http'
import data from './data.js'
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'application\json'});
    res.write(JSON.stringify(data));
    res.end()
});

server.listen(5000, () => {
    console.log(`server is running on http://localhost:5000`)
})