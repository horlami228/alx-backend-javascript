function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const students = getListStudents
    .filter((element) => element.location === city)
    .map((element) => ({
      id: element.id,
      firstName: element.firstName,
      location: element.location,
      grade: (newGrades
        .filter((grade) => grade.studentId === element.id)
        .map((grade) => grade.grade)[0]) || 'N/A',
    }));

  return students;
}

module.exports = updateStudentGradeByCity;
