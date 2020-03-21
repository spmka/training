import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LogisticSystemList} from '../../../../server/logistic-systems/logistic-system.model';
import {Result} from '../tools/result';

@Injectable({
  providedIn: 'root'
})
export class LogisticSystemsService {
  /** The url to load all logistic systems */
  private getAllUrl: string;
  /** The error flag to produce errors every second call */
  private produceError: boolean;

  /**
   * Constructor.
   * @param http the injected http client.
   */
  constructor(private http: HttpClient) {
    this.getAllUrl = 'api/logistic-systems';
    this.produceError = false;
  }

  /**
   * Loads all logistic systems from the server and returns them.
   * This method does not care about errors, how does the caller know that there can be errors?
   * Typescript has not syntax feature like "throws" in JAVA to in the methd signature to inform
   * callers that there is a possibility of a thrown error
   */
  public async loadLogisticSystemsNoError(): Promise<LogisticSystemList> {
    console.log('LogisticSystemsService.loadLogisticSystemsNoError() - Before await get().toPromise()');
    const logisticSystems: LogisticSystemList =
      await this.http.get<LogisticSystemList>(this.getAllUrl).toPromise();
    console.log('LogisticSystemsService.loadLogisticSystemsNoError() - After await get().toPromise()', logisticSystems);
    return logisticSystems;
  }

  /**
   * Tries to loads all logistic systems from the server but produces an error without handling it.
   * The caller can't see from the method signature that tere is a possible error thrown,
   * he can only find out by analyzing the code (http call).
   */
  public async loadLogisticSystemsWithError(): Promise<LogisticSystemList> {
    console.log('LogisticSystemsService.loadLogisticSystemsWithError() - Before await get().toPromise()');
    const logisticSystems: LogisticSystemList =
      await this.http.get<LogisticSystemList>('not-defined').toPromise();
    console.log('LogisticSystemsService.loadLogisticSystemsWithError() - After await get().toPromise()', logisticSystems);
    return logisticSystems;
  }

  /**
   * Tries to loads all logistic systems from the server but produces an errorand catches it.
   * What is the correct return value in case of an error?
   * null, or an empty array [] or should we throw new error?
   * But if we throw a new error how does the caller know that he must catch it -> he must analyze the code - not good!
   */
  public async loadLogisticSystemsWithErrorCatch(): Promise<LogisticSystemList> {
    try {
      console.log('LogisticSystemsService.loadLogisticSystemsWithErrorCatch() - Before await get().toPromise()');
      const logisticSystems: LogisticSystemList =
        await this.http.get<LogisticSystemList>('not-defined').toPromise();
      console.log('LogisticSystemsService.loadLogisticSystemsWithErrorCatch() - After await get().toPromise()', logisticSystems);
      return logisticSystems;
    } catch (error) {
      console.warn('LogisticSystemsService.loadLogisticSystemsWithErrorCatch() - catch', error);
      return null;
      // or better???
      // return [];
      // or better???
      // throw(new Error('Error in http call'));
    }
  }

  /**
   * Loads all logistic systems from the server and returns them or returns an error,
   * both possibilities are handled via the Result return type.
   * The caller can see from the method signature that there is eiter a LogisticSystemList
   * or a LogisticSystemsServiceError returned an can react accordingly.
   */
  public async loadLogisticSystems(): Promise<Result<LogisticSystemList, LogisticSystemsServiceError>> {
    try {
      console.log('LogisticSystemsService.loadLogisticSystems() - Before await get().toPromise()');
      // Every second call we produce an error therefore we modify the url every second call
      const logisticSystems: LogisticSystemList =
        await this.http.get<LogisticSystemList>(this.produceError ? 'not-defined' : this.getAllUrl).toPromise();
      this.produceError = !this.produceError;
      console.log('LogisticSystemsService.loadLogisticSystems() - After await get().toPromise()', logisticSystems);
      return Result.ok(logisticSystems);
    } catch (error) {
      return Result.err(new LogisticSystemsServiceError(error));
    }
  }

}

/** Simple example class for a specialized error. */
export class LogisticSystemsServiceError extends Error {

  /**
   * Constructor.
   * @param originalError the original thrown error.
   */
  constructor(private originalError: Error) {
    super('Error while loading logistic-systems from the server');
  }
}
