import {Component} from '@angular/core';
import {AbstractHardwareUsageChartComponent, AbstractHardwareUsageList} from '../abstract-hardware-usage-chart.component';

/** 
 * The cpu usage component.
 * This component is a presentational component which has no dependencies to any service.
 */
@Component({
  selector: 'app-cpu-usage',
  templateUrl: './cpu-usage.component.html',
  styleUrls: ['./cpu-usage.component.scss']
})
export class CpuUsageComponent extends AbstractHardwareUsageChartComponent {

  /**
   * Called when new data is given via @Input.
   * @param hardwareUsageList the data to display in the chart.
   */
  protected setChartOptions(hardwareUsageList: AbstractHardwareUsageList) {
    this.setDefaultBarChartOtions(hardwareUsageList);
    this.chartOptions.title.text = `CPU Usage for System ${this.systemName}`;
    this.chartOptions.yAxis[0].name = 'CPU Usage';
  }
}
