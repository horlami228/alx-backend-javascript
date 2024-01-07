class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this.sqft = sqft;
    } else {
      throw new TypeError('sqft should be a number');
    }

    if (this.constructor !== Building) {
      if (!this.evacuationWarningMessage || typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // a getter method for sqft
  get sqft() {
    return this._sqft;
  }

  // setter method for sqft
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft should be a number');
    } else {
      this._sqft = value;
    }
  }
}

module.exports = Building;
