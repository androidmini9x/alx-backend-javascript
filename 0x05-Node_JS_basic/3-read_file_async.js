const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject('Cannot load the database');
      }
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

      console.log(`Number of students: ${students.length}`);
      for (const [key, value] of Object.entries(groupByField)) {
        console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }

      resolve({ groupByField, studentsCount: students.length });
    });
  });
}

module.exports = countStudents;
