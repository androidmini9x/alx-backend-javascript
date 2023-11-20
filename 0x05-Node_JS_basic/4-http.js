const http = require('http');

const host = 'localhost';
const port = 1245;

const app = http.createServer((_, res) => {
  const text = 'Hello Holberton School!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', text.length);
  res.end(text);
});

app.listen(port, host, () => {
  console.log(`Server is listening on: ${host}:${port}`);
});
