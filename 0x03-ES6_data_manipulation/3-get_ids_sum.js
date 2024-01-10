function getStudentIdsSum(getListStudents) {
  const sum = getListStudents
    .reduce((accumulator, currentvalue) => accumulator + currentvalue.id, 0);
  return sum;
}

export default getStudentIdsSum;
