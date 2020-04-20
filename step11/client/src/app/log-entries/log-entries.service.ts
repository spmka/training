import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LogEntryList} from '../../../../server/log-entries/log-entry.model';
import {Result} from '../tools/result';

@Injectable({
  providedIn: 'root'
})
export class LogEntriesService {
  // The url to the hardware usage data for a system.
  private getLogEntriesBySystemIdUrl: string;

  /**
   * Constructor.
   * @param http the injected http client.
   */
  constructor(private http: HttpClient) {
    this.getLogEntriesBySystemIdUrl = 'api/logistic-systems/:id/log-entries';
  }

  /**
   * Returns a list of hardware usages for the given system.
   * @param systemId the id of the system to load the hardware usage for.
   */
  public async loadLogEntries(systemId: number): Promise<Result<LogEntryList, Error>> {
    try {
      const logEntries = await this.http.get<LogEntryList>(this.getLogEntriesBySystemIdUrl.replace(':id', '' + systemId)).toPromise();
      return Result.ok(logEntries);
    } catch (error) {
      return Result.err(error);
    }
  }
}
