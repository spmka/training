import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HardwareUsageService} from './hardware-usage.service';
import {HardwareUsageList} from '../../../../server/hardware-usages/hardware-usage.model';
import {LogisticSystem} from '../../../../server/logistic-systems/logistic-system.model';

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

  /**
   * Constructor
   * @param route the injected activated route
   * @partam hardWareUsageService the injected hardware usage service
   */
  public constructor(private route: ActivatedRoute, private hardWareUsageService: HardwareUsageService) {
  }

  /** Angular lifer cycle method */
  public ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.loisticSystem = {
        id: +paramMap.get('id'),
        name: paramMap.get('name')
      };
      this.loadHardwareUsage();
    });
  }

  /**
   * Loads the hardware usage data for the logistic system.
   */
  private async loadHardwareUsage() {
    const result = await this.hardWareUsageService.loadHardwareUsageData(this.loisticSystem.id);
    if (result.isOk()) {
      this.hardwareusages = result.getValue();
    }
  }
}
