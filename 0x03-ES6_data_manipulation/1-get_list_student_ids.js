function getListStudentIds(getListStudents) {
  if (Array.isArray(getListStudents)) {
    const studentId = getListStudents.map(({ id }) => id);
    return studentId;
  }
  return [];
}

module.exports = getListStudentIds;
