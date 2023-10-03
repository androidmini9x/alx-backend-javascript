export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((e) => e.location === city);
}
