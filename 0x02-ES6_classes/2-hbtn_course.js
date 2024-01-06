export default class HolbertonCourse {
  // class definition for HolbertonCourse
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this.name = name;
    } else {
      throw (new TypeError('Name must be a string'));
    }

    if (typeof length === 'number') {
      this._length = length;
    } else throw new TypeError('Length must be a number');

    if ((Array.isArray(students) === true) && students.every((student) => typeof student === 'string')) {
      this._students = students;
    } else {
      throw new Error('Students should be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw (new TypeError('Name must be a string'));

    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') { throw (new TypeError('Length must be a number')); }

    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) throw new Error('Students must be an array');
    
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
