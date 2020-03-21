import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LogisticSystemList} from '../../../server/logistic-systems/logistic-system.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Constructor.
   * @param http the injected http client.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Angular life cycle method,
   * called once when the component is initialized and before displaying it.
   */
  public async ngOnInit() {
    // no waiting for the completion of loadLogisticSystems(),
    // loadLogisticSystemsWithErrorHandling() runs in parallel while loadLogisticSystems() waits for a promise
    console.log('\n========== No waiting for loadLogisticSystems() ==========\n\n');
    this.loadLogisticSystems();
    this.loadLogisticSystemsWithErrorHandling();

    console.log('\n========== Waiting 10 seconds ==========\n\n');
    await new Promise(resolve => setTimeout(() => resolve(), 10000));
    // now we wait for the completion of loadLogisticSystems(),
    // loadLogisticSystemsWithErrorHandling() runs after loadLogisticSystems()
    console.log('\n\n========== Waiting for loadLogisticSystems() ==========\n\n');
    await this.loadLogisticSystems();
    this.loadLogisticSystemsWithErrorHandling();
  }

  /** Load all logistic systems from the server in 3 possible ways */
  private async loadLogisticSystems() {
    const url = '/api/logistic-systems';

    console.log('\n===== Start loadLogisticSystems()\n\n');
    console.log('loadLogisticSystems() - Before get().subscribe');
    // subscribe(next, error, complete)
    // next is a function (data) => void, that is called when the observable has new data to deliver to the observer
    // error is a function (error) => void, that is called when the observable has an error (see loadLogisticSystemsWithErrorHandling())
    // complete is a funtion () => void, that is called when the observable is complete and does not create new data
    // complete is never called when there is an error
    this.http.get<LogisticSystemList>(url)
      .subscribe(
        logisticSystems1 => console.log('loadLogisticSystems() - After get().subscribe()', logisticSystems1),
        null,
        () => console.log('loadLogisticSystemsWithErrorHandling() - get().subscribe() completed'));

    // Without a subscribe() an observable never produces data this.http.get<LogisticSystemList>(url)
    // This statement does not do an http call because there is no observer -> no subscribe()
    // The network tab of the browser shows no http call for this statement
    // ===> Observables are lazy
    this.http.get<LogisticSystemList>(url);

    // then(onfulfilled, onrejected)
    // onfulfilled is a function (data) => void that is called when the promise is resolved
    // onrejected is a function (reason) => void that is called when the promise is rejected can't deliver the data for a given reason
    console.log('loadLogisticSystems() - Before get().toPromise().then()');
    this.http.get<LogisticSystemList>(url).toPromise()
      .then(
        logisticSystems2 => console.log('loadLogisticSystems() - After get().toPromise().then() - onfulfilled', logisticSystems2),
        rejectReason => console.log('loadLogisticSystems() - After get().toPromise().then() - onrejected', rejectReason));

    // The conversion from an observable to a promise creates triggers the http call
    // ==> Promises are eager
    this.http.get<LogisticSystemList>(url).toPromise();

    console.log('loadLogisticSystems() - Before await get().toPromise()');
    // await waits until the promise is fulfilled or rejected or an error is thrown
    // await can only be used in an asyn function or method (here private async loadLogisticSystems())
    // In the background javascript modifies the code to chained then() calls
    // Keep in mind only this method waits here not the complete runtime, Javascript is single threaded and can't be stopped
    // Other functions run in paralell while this function waits
    // See the difference in ngOnInit() when we also do an await there
    const logisticSystems3: LogisticSystemList =
      await this.http.get<LogisticSystemList>(url).toPromise();
    console.log('loadLogisticSystems() - After await get().toPromise()', logisticSystems3);
    console.log('\n===== End loadLogisticSystems()\n\n');
  }

  /** Load all logistic systems from the server in 3 possible ways with error handling */
  private async loadLogisticSystemsWithErrorHandling() {
    const url = '/api/logistic-systems-not-defined';

    console.log('\n===== Start loadLogisticSystemsWithErrorHandling()\n\n');

    try {
      console.log('loadLogisticSystemsWithErrorHandling() - Before get().subscribe');
      this.http.get<LogisticSystemList>(url)
        .subscribe(
          logisticSystems1 => console.log('loadLogisticSystemsWithErrorHandling() - After get().subscribe()', logisticSystems1),
          error => console.warn('loadLogisticSystemsWithErrorHandling() - error - After get().subscribe()', error),
          () => console.log('loadLogisticSystemsWithErrorHandling() - get().subscribe() completed'));
    } catch (error) {
      // We never reach this line because errors in observables must be handled by the error callback part of subscribe();
      console.warn('loadLogisticSystemsWithErrorHandling() - catch - After get().subscribe()', error);
    }

    console.log('loadLogisticSystemsWithErrorHandling() - Before get().toPromise().then()');
    this.http.get<LogisticSystemList>(url).toPromise()
      .then(
        logisticSystems2 => console.log('loadLogisticSystemsWithErrorHandling() - After get().toPromise().then() - onfulfilled',
          logisticSystems2),
        // In case of an error we will not reach this statement, this can only be reached if the promise is actively rejected
        rejectReason => console.warn('loadLogisticSystemsWithErrorHandling() - After get().toPromise().then() - onrejected', rejectReason))
      .catch(error => console.warn('loadLogisticSystemsWithErrorHandling() - catch() - After get().toPromise().then()', error));

    try {
      console.log('loadLogisticSystemsWithErrorHandling() - Before await get().toPromise()');
      const logisticSystems3: LogisticSystemList = await this.http.get<LogisticSystemList>(url).toPromise();
      console.log('loadLogisticSystemsWithErrorHandling() - After await get().toPromise()', logisticSystems3);
    } catch (error) {
      console.warn('loadLogisticSystemsWithErrorHandling() - catch - After await get().toPromise()', error);
    }
    console.log('\n===== End loadLogisticSystemsWithErrorHandling()\n\n');
  }

}
