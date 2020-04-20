import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HardwareUsageService} from './hardware-usage.service';
import {HardwareUsageList} from '../../../../server/hardware-usages/hardware-usage.model';
import {LogisticSystem} from '../../../../server/logistic-systems/logistic-system.model';
import {ThreadUsageList} from './threads/threads.component';
import {AbstractHardwareUsageList} from './abstract-hardware-usage-chart.component';

/** Component to show the hardware usage for a logistic system */
@Component({
  selector: 'app-hardware-usage',
  templateUrl: './hardware-usage.component.html',
  styleUrls: ['./hardware-usage.component.scss']
})
export class HardwareUsageComponent implements OnInit {
  /** The list of hardware usages */
  public hardwareusages: HardwareUsageList;
  /** The current logistic system */
  public loisticSystem: LogisticSystem;
  /** The list of threads as a part of the hardware usage */
  public threadUsageList: ThreadUsageList;
  /** The list of cpu usages as a part of the hardware usage */
  public cpuUsageList: AbstractHardwareUsageList;
  /** The list of disk usages as a part of the hardware usage */
  public diskUsageList: AbstractHardwareUsageList;

  /**
   * Constructor
   * @param route the injected activated route
   * @partam hardWareUsageService the injected hardware usage service
   */
  public constructor(private route: ActivatedRoute, private hardWareUsageService: HardwareUsageService) {
  }

  /** Angular lifer cycle method */
  public ngOnInit() {
    this.route.paramMap.subscribe(async paramMap => {
      this.loisticSystem = {
        id: +paramMap.get('id'),
        name: paramMap.get('name')
      };
      await this.loadHardwareUsage();
      setInterval(() => this.loadHardwareUsage(), 5000);
    });
  }

  /**
   * Loads the hardware usage data for the logistic system.
   */
  private async loadHardwareUsage() {
    const result = await this.hardWareUsageService.loadHardwareUsageData(this.loisticSystem.id);
    if (result.isOk()) {
      this.hardwareusages = result.getValue();
      // Why is ({}) used in the next statement? 
      this.threadUsageList = this.hardwareusages.map(hwUsage => ({timestamp: hwUsage.timestamp, threads: hwUsage.threads}));
      this.cpuUsageList = this.hardwareusages.map(hwUsage => ({timestamp: hwUsage.timestamp, value: hwUsage.cpuUsage}));
      this.diskUsageList = this.hardwareusages.map(hwUsage => ({timestamp: hwUsage.timestamp, value: hwUsage.diskUsageGB}));
    }
  }
}
