const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter((e) => e !== '');
        const students = lines.slice(1);
        const groupByField = {};

        for (const student of students) {
          const stuProp = student.split(',');
          const key = stuProp[3];

          if (!Object.keys(groupByField).includes(key)) {
            groupByField[key] = [];
          }

          groupByField[key].push(stuProp[0]);
        }

        resolve({ groupByField, studentsCount: students.length });
      }
    });
  });
}

module.exports = readDatabase;
