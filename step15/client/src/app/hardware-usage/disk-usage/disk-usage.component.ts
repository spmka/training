import {Component} from '@angular/core';
import {AbstractHardwareUsageChartComponent, AbstractHardwareUsageList} from '../abstract-hardware-usage-chart.component';

/** 
 * The disk usage component.
 * This component is a presentational component which has no dependencies to any service.
 */
@Component({
  selector: 'app-disk-usage',
  templateUrl: './disk-usage.component.html',
  styleUrls: ['./disk-usage.component.scss']
})
export class DiskUsageComponent extends AbstractHardwareUsageChartComponent {

  /**
   * Called when new data is given via @Input.
   * @param hardwareUsageList the data to display in the chart.
   */
  protected setChartOptions(hardwareUsageList: AbstractHardwareUsageList) {
    this.setDefaultLineChartOtions(hardwareUsageList);
    this.chartOptions.title.text = `Disk Usage for System ${this.systemName}`;
    this.chartOptions.yAxis[0].name = 'Disk Usage';
  }
}
