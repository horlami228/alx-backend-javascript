import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this.amount = amount;
    } else {
      throw new Error('Amount must be a number');
    }

    if (currency instanceof Currency) {
      this.currency = currency;
    } else {
      throw new Error('currency must be an instance of Currency()');
    }
  }

  // getter for amount
  get amount() {
    return this._amount;
  }

  // setter for amount
  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('Amount should be a number');
    } else {
      this._amount = value;
    }
  }

  // getter for currency
  get currency() {
    return this._currency;
  }

  // setter for currency
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new Error('Currency should be an instance of Currency');
    } else {
      this._currency = value;
    }
  }

  // class method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this.currency.code})`;
  }

  // static method covert price
  static convertPrice(amount, conversionRate) {
    if (amount !== 'number') {
      throw new Error('Amount should be a number');
    } else if (conversionRate !== 'number') {
      throw new Error('CoversionRate should be a number');
    }

    return conversionRate * amount;
  }
}
