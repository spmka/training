import {Component, OnInit} from '@angular/core';
import {LogisticSystemsService} from '../logistic-systems/logistic-systems.service';
import {LogisticSystemList, LogisticSystem} from '../../../../server/logistic-systems/logistic-system.model';

/** The Dashboard component */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /** The list of logistic systems */
  public logisticSystems: LogisticSystemList;

  /**
   * Constructor.
   * @param logisticSystemsService the injected service to load logistic systems.
   */
  public constructor(private logisticSystemsService: LogisticSystemsService) {
    this.logisticSystems = [];
  }

  /** Angular life cycle method */
  public async ngOnInit() {
    const result = await this.logisticSystemsService.loadLogisticSystems();
    if (result.isOk) {
      this.logisticSystems = result.getValue();
    }
  }

  /**
   * Shows logs for the given logistic system.
   * @param logisticSystem show logs for this logistic system.
   */
  public onShowLogs(logisticSystem: LogisticSystem) {
    console.log(`onShowLogs() for ${logisticSystem.name}`);
  }

  /**
   * Shows hardware usages for the given logistic system.
   * @param logisticSystem show hardware usages for this logistic system.
   */
  public onShowHardwareUsage(logisticSystem: LogisticSystem) {
    console.log(`onShowHardwareUsage() for ${logisticSystem.name}`);
  }
}
