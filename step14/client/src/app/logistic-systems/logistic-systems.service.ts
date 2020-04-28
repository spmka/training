import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LogisticSystemList, LogisticSystem} from '../../../../server/logistic-systems/logistic-system.model';
import {Result} from '../tools/result';

@Injectable({
  providedIn: 'root'
})
export class LogisticSystemsService {
  /** The url to load all logistic systems */
  private getAllUrl: string;

  /**
   * Constructor.
   * @param http the injected http client.
   */
  constructor(private http: HttpClient) {
    this.getAllUrl = 'api/logistic-systems';
  }

  /**
   * Loads all logistic systems from the server and returns them or returns an error,
   * both possibilities are handled via the Result return type.
   * The caller can see from the method signature that there is eiter a LogisticSystemList
   * or a LogisticSystemsServiceError returned an can react accordingly.
   */
  public async loadLogisticSystems(): Promise<Result<LogisticSystemList, LogisticSystemsServiceError>> {
    try {
      const logisticSystems: LogisticSystemList =
        await this.http.get<LogisticSystemList>(this.getAllUrl).toPromise();
      return Result.ok(logisticSystems);
    } catch (error) {
      return Result.err(new LogisticSystemsServiceError(error));
    }
  }

  /**
   * Loads a logistic system with the given system id from the server.
   * @param systemId the id of the system to load
   */
  public async loadLogisticSystem(systemId: number): Promise<Result<LogisticSystem, LogisticSystemsServiceError>> {
    try {
      const logisticSystem: LogisticSystem = await this.http.get<LogisticSystem>(this.getAllUrl + '/' + systemId).toPromise();
      return Result.ok(logisticSystem);
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
  public constructor(private originalError: Error) {
    super('Error while loading logistic-systems from the server');
  }
}
