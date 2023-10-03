export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.filter((s) => s.location === city)
    .map((s) => {
      const grade = newGrades.filter((e) => e.studentId === s.id);

      return {
        ...s,
        grade: grade.length > 0 ? grade[0].grade : 'N/A',
      };
    });
}
