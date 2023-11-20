const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students');
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
    .catch((err) => res.write(err.message))
    .finally(() => res.end());
});

app.listen(port);

module.exports = app;
