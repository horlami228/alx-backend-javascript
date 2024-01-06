class Currency {
  // constructor to initialize a new currency object
  constructor(code, name) {
    if (typeof code === 'string') {
      this.code = code;
    } else {
      throw new TypeError('Code should be a string');
    }

    if (typeof name === 'string') {
      this.name = name;
    } else {
      throw new TypeError('Name should be a string');
    }
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

  // class method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
