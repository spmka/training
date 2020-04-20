import { Component, Input } from '@angular/core';

/** The thread usage data structure */
export interface ThreadUsage {
  timestamp: Date,
  threads: number;
}

/** A list of thread usages */
export type ThreadUsageList = Array<ThreadUsage>;

/** 
 * The threads usage component.
 * This component is a presentational component which has no dependencies to any service.
 * The data for this component is given to it via the @Input parameter.
 */
@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent {
  /** The system name */
  @Input() private systemName: string;
  /** The thread list that is displayed by the component */
  @Input() public set threadUsageList(newThreadUsageList: ThreadUsageList) {
    if (newThreadUsageList) {
      this.setChartOptions(newThreadUsageList);
    }
  };
  /** the options for the chart */
  public chartOptions;

  /**
   * Sets the options for the thread chart.
   * @param threadUsageList the thread usage list to display in the chart.
   */
  public setChartOptions(threadUsageList: ThreadUsageList) {
    this.chartOptions = {
      title: {
        text: `Thread Usage for System ${this.systemName}`,
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
          data: threadUsageList.map(threadUsage => threadUsage.timestamp)
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Threads',
        }
      ],
      series: [
        {
          type: 'bar',
          name: 'Threads',
          data: threadUsageList.map(threadUsage => threadUsage.threads),
        }
      ]
    };
  }

}
