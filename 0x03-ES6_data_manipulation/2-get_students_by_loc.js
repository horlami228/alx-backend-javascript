function getStudentsByLocation(getListStudents, city) {
  const student = getListStudents.filter(({ location }) => location === city);
  return student;
}
module.exports = getStudentsByLocation;
