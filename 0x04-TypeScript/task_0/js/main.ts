interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const stu1: Student = {
  firstName: "Ahmed",
  lastName: "Mohammad",
  age: 31,
  location: "UAE"
};

const stu2: Student = {
  firstName: "Samer",
  lastName: "Mohammad",
  age: 31,
  location: "UAE"
};

const studentsList: Student[] = [stu1, stu2];

for (const student of studentsList) {
  document.write(`${student.firstName} - ${student.location}<br>`);
}