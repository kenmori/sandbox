export abstract class AbstractError extends Error {
  constructor(public message = "") {
    // cf. https://github.com/jhusain/eslint-plugin-immutable/issues/16
    /* eslint-disable immutable/no-mutation */
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = new.target.name;
    /* eslint-enable immutable/no-mutation */
  }
}

// tslint:disable:max-classes-per-file
export class LogicError extends AbstractError { }
export class ValidationError extends AbstractError { }
export class UnreachableError extends AbstractError { }
