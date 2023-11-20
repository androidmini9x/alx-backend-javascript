import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('./database.csv')
      .then(({ groupByField }) => {
        response.statusCode = 200;
        response.write('This is the list of our students\n');
        const fields = Object.entries(groupByField);
        for (let i = 0; i < fields.length; i += 1) {
          const field = fields[i];
          if (i === fields.length - 1) {
            response.write(`Number of students in ${field[0]}: ${field[1].length}. List: ${field[1].join(', ')}`);
            break;
          }
          response.write(`Number of students in ${field[0]}: ${field[1].length}. List: ${field[1].join(', ')}\n`);
        }
        response.end();
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.end('Major parameter must be CS or SWE');
    }

    readDatabase('./database.csv')
      .then(({ groupByField }) => {
        response.statusCode = 200;
        const field = groupByField[major];
        response.write(`List: ${field.join(', ')}`);
        response.end();
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send(err.message);
      });
  }
}

export default StudentsController;
