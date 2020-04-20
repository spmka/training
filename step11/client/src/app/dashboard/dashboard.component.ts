import {Component, OnInit} from '@angular/core';
import {LogisticSystemsService} from '../logistic-systems/logistic-systems.service';
import {LogisticSystemList, LogisticSystem} from '../../../../server/logistic-systems/logistic-system.model';
import {Router} from '@angular/router';

/** The Dashboard component */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /** The list of logistic systems */
  public logisticSystems: LogisticSystemList;
  /** The options that define the error chart */
  public chartOptions: any;

  /**
   * Constructor.
   * @param logisticSystemsService the injected service to load logistic systems.
   * @param router the injected angular router.
   */
  public constructor(private logisticSystemsService: LogisticSystemsService, private router: Router) {
    this.logisticSystems = [];
  }

  /** Angular life cycle method */
  public async ngOnInit() {
    const result = await this.logisticSystemsService.loadLogisticSystems();
    if (result.isOk()) {
      this.logisticSystems = result.getValue();
      this.setupChartOptions();
    }
  }

  /** Setup the options for the error chart */
  private setupChartOptions() {
    this.chartOptions = {
      title: {
        text: 'Errors per System',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'horizontal',
        bottom: '0',
        data: this.logisticSystems.map(system => system.name)
      },
      series: [{
        type: 'pie',
        data: this.logisticSystems.map(system => {return {name: system.name, value: Math.round(Math.random() * 100) + 10}}),
      }]
    };
  }

  /**
   * Shows hardware usages for the given logistic system.
   * @param logisticSystem show hardware usages for this logistic system.
   */
  public onShowHardwareUsage(logisticSystem: LogisticSystem) {
    this.router.navigate(['/hardware-usage', logisticSystem]);
  }
}
