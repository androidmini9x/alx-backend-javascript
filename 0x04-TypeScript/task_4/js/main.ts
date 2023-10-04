const cpp: Subjects.Cpp = new Subjects.Cpp();
const java: Subjects.Java = new Subjects.Java();
const react: Subjects.React = new Subjects.React();

const cTeacher: Subjects.Teacher = {
    firstName: 'Moe',
    lastName: 'Loka',
    experienceTeachingC: 10,
}

console.log('C++');
cpp.setTeacher(cTeacher);
cpp.getRequirements();
cpp.getAvailableTeacher();

console.log('Java');
java.setTeacher(cTeacher);
java.getRequirements();
java.getAvailableTeacher();

console.log('React');
react.setTeacher(cTeacher);
react.getRequirements();
react.getAvailableTeacher();


export {
    cpp,
    java,
    react,
    cTeacher
}