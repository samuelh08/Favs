const http = require('http');
const app = require('./server');
const database = require('./server/database');
const {
  database: { protocol, url, username, password },
  port,
} = require('./server/config');

database.connect({
  protocol,
  url,
  username,
  password,
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
