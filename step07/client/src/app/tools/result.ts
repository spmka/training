/** Implements a result that can be ok with an ok value or an error with an error value */
export class Result<O, E extends Error> {
  /**
   * Creates a new result, only ok or error should be set.
   * @param okValue the ok value for the result.
   * @param errorValue the error value for the result
   */
  private constructor(private okValue: O, private errorValue: E) {}

  /**
   * Creates a new ok result.
   * @param okValue the ok value to set.
   */
  public static ok<O, E extends Error>(okValue: O) {
    return new Result<O, E>(okValue, null);
  }

  /**
   * Creates a new error result.
   * @param errorValue the error value to set.
   */
  public static err<O, E extends Error>(errorValue: E) {
    return new Result<O, E>(null, errorValue);
  }

  /** True if this result is ok, has an ok value. */
  public isOk(): boolean {
    return this.okValue !== null;
  }

  /** True if this result is an error, has an error value */
  public isError(): boolean {
    return this.errorValue !== null;
  }

  /** Returns the ok value */
  public getValue(): O {
    return this.okValue;
  }

  /** Returns the error value */
  public getError(): E {
    return this.errorValue;
  }
}
