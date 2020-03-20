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
  public ngOnInit() {
    this.loadLogisticSystems();
  }

  /** Load all logistic systems from the server in 3 possible ways */
  private async loadLogisticSystems() {
    console.log('Before get().subscribe');
    this.http.get<LogisticSystemList>('/api/logistic-systems')
      .subscribe(logisticSystems1 => console.log('After get().subscribe()', logisticSystems1));

    console.log('Before get().toPromise().then()');
    this.http.get<LogisticSystemList>('/api/logistic-systems').toPromise()
      .then(logisticSystems2 => console.log('After get().toPromise().then()', logisticSystems2));

    console.log('Before await get().toPromise()');
    const logisticSystems3: LogisticSystemList =
      await this.http.get<LogisticSystemList>('/api/logistic-systems').toPromise();
    console.log('After await get().toPromise()', logisticSystems3);
  }

}
