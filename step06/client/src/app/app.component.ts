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

  /** Load all logistic systems from the server */
  private loadLogisticSystems() {
    this.http.get<LogisticSystemList>('/api/logistic-systems')
      .subscribe(logisticSystems => console.log(logisticSystems));
  }
}
