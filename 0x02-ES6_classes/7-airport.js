class Airport {
  constructor(name, code) {
    this.name = name,
    this.code = code;
  }

  // getter for code
  get code() {
    return this._code;
  }

  // setter for code
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code should be a string');
    }

    this._code = value;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name should be a string');
    }

    this._name = value;
  }

  // toString() {
  //   return `Airport [${this.code}] `
  // }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}

module.exports = Airport;
