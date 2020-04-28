import {Component} from '@angular/core';
import {AbstractHardwareUsageChartComponent, AbstractHardwareUsageList} from '../abstract-hardware-usage-chart.component';

@Component({
  selector: 'app-cpu-usage',
  templateUrl: './cpu-usage.component.html',
  styleUrls: ['./cpu-usage.component.scss']
})
export class CpuUsageComponent extends AbstractHardwareUsageChartComponent {

  protected setChartOptions(hardwareUsageList: AbstractHardwareUsageList) {
    this.setDefaultBarChartOtions(hardwareUsageList);
    this.chartOptions.title.text = `CPU Usage for System ${this.systemName}`;
    this.chartOptions.yAxis[0].name = 'CPU Usage';
  }
}
