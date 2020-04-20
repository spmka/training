import { Component, OnInit } from '@angular/core';
import {AbstractHardwareUsageChartComponent, AbstractHardwareUsageList} from '../abstract-hardware-usage-chart.component';

@Component({
  selector: 'app-disk-usage',
  templateUrl: './disk-usage.component.html',
  styleUrls: ['./disk-usage.component.scss']
})
export class DiskUsageComponent extends AbstractHardwareUsageChartComponent {

  protected setChartOptions(hardwareUsageList: AbstractHardwareUsageList) {
    this.setDefaultLineChartOtions(hardwareUsageList);
    this.chartOptions.title.text = `Disk Usage for System ${this.systemName}`;
    this.chartOptions.yAxis[0].name = 'Disk Usage';
  }
}
