const http = require('http');
const countStudents = require('./3-read_file_async');

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then(({ groupByField, studentsCount }) => {
        res.write(`Number of students: ${studentsCount}\n`);
        const fields = Object.entries(groupByField);
        for (let i = 0; i < fields.length; i += 1) {
          const field = fields[i];
          if (i === fields.length - 1) {
            res.write(`Number of students in ${field[0]}: ${field[1].length}. List: ${field[1].join(', ')}`);
            break;
          }
          res.write(`Number of students in ${field[0]}: ${field[1].length}. List: ${field[1].join(', ')}\n`);
        }
        res.end();
      })
      .catch((err) => res.end(err));
  }
});

app.listen(port, host, () => {
  console.log(`Server is listening on: ${host}:${port}`);
});
