import {Component} from '@angular/core';
import {AbstractHardwareUsageChartComponent, AbstractHardwareUsageList} from '../abstract-hardware-usage-chart.component';

/** 
 * The threads usage component.
 * This component is a presentational component which has no dependencies to any service.
 */
@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent extends AbstractHardwareUsageChartComponent {

  /**
   * Called when new data is given via @Input.
   * @param hardwareUsageList the data to display in the chart.
   */
  protected setChartOptions(hardwareUsageList: AbstractHardwareUsageList) {
    this.setDefaultBarChartOtions(hardwareUsageList);
    this.chartOptions.title.text = `Threads for System ${this.systemName}`;
    this.chartOptions.yAxis[0].name = 'Threads';
  }

}
