import {Component, OnInit} from '@angular/core';
import {LogisticSystemList} from '../../../server/logistic-systems/logistic-system.model';
import {LogisticSystemsService} from './logistic-systems/logistic-systems.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Constructor.
   * @param logisticSystemsService the injected service to load logistic systems.
   */
  constructor(private logisticSystemsService: LogisticSystemsService) {
  }

  /**
   * Angular life cycle method,
   * called once when the component is initialized and before displaying it.
   */
  public async ngOnInit() {
    console.log('\n\n===== ngOnInit() loading logistic systems no error...');
    const logisticSystems1 = await this.logisticSystemsService.loadLogisticSystemsNoError();
    console.log('===== ngOnInit() done loading logistic systems no error', logisticSystems1);

    console.log('\n\n===== ngOnInit() loading logistic systems with error and catch...');
    const logisticSystems2 = await this.logisticSystemsService.loadLogisticSystemsWithErrorCatch();
    console.log('===== ngOnInit() done loading logistic systems with error and catch', logisticSystems2);

    for (let i = 1; i <= 2; i++) {
      console.log('\n\n===== ngOnInit() loading logistic systems with error handling...');
      const result = await this.logisticSystemsService.loadLogisticSystems();
      if (result.isOk()) {
        console.log('===== ngOnInit() done loading logistic systems with error handling - ok', result.getValue());
      } else {
        console.warn('===== ngOnInit() done loading logistic systems with error handling - error', result.getError());
      }
    }

    console.log('\n\n===== ngOnInit() loading logistic systems with error...');
    // const logisticSystems3 = await this.logisticSystemsService.loadLogisticSystemsWithError();
    // console.log('===== ngOnInit() done loading logistic systems with error', logisticSystems3);

    console.log('===== ngOnInit() this line of code is never reached!');
  }

}
