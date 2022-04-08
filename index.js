const http = require('http');
const app = require('./server');
const { port } = require('./server/config');

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
