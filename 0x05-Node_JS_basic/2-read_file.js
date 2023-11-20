const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf-8').trim().split('\n').filter((e) => e !== '');
  const students = data.slice(1);
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
}

module.exports = countStudents;
