import {Input} from '@angular/core';

/** An abstract hardware usage */
export interface AbstractHardwareUsage {
  timestamp: Date,
  value: number
}

/** An abstract hardware usage list */
export type AbstractHardwareUsageList = Array<AbstractHardwareUsage>;

export abstract class AbstractHardwareUsageChartComponent {
  /** The name of the system */
  @Input() public systemName: string;
  /** The list of hardware usages */
  @Input() public set hardwareUsageList(newHardwareUsageList: AbstractHardwareUsageList) {
    if (newHardwareUsageList) {
      this.setChartOptions(newHardwareUsageList);
    }
  };
  /** The options for the chart */
  public chartOptions;

  /**
   * Sets the chart options.
   * @param hardwareUsageList the hardware usage list.
   */
  protected abstract setChartOptions(hardwareUsageList: AbstractHardwareUsageList);
  
  protected setDefaultBarChartOtions(hardwareUsageList: AbstractHardwareUsageList) {
    this.chartOptions = {
      title: {
        left: 'center'
      },
      grid: {
        bottom: 70
      },
      dataZoom: [{
        type: 'inside'
      }, {
        type: 'slider'
      }],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {show: false},
          data: hardwareUsageList.map(hwUsage => hwUsage.timestamp)
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          type: 'bar',
          data: hardwareUsageList.map(hwUsage => hwUsage.value),
        }
      ]
    };
  }

  protected setDefaultLineChartOtions(hardwareUsageList: AbstractHardwareUsageList) {
    this.chartOptions = {
      title: {
        left: 'center'
      },
      grid: {
        bottom: 70
      },
      dataZoom: [{
        type: 'inside'
      }, {
        type: 'slider'
      }],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {show: false},
          data: hardwareUsageList.map(hwUsage => hwUsage.timestamp)
        }
      ],
      yAxis: [
        {
          type: 'value',
        }
      ],
      series: [
        {
          type: 'line',
          data: hardwareUsageList.map(hwUsage => hwUsage.value),
        }
      ]
    };
  }
}