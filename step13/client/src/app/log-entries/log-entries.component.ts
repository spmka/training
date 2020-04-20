import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LogisticSystemsService} from '../logistic-systems/logistic-systems.service';
import {LogEntriesService} from './log-entries.service';
import {LogisticSystem} from '../../../../server/logistic-systems/logistic-system.model';
import {LogEntryList} from '../../../../server/log-entries/log-entry.model';
import {Result} from '../tools/result';


/** Component to show the log entries for a logistic system */
@Component({
  selector: 'app-log-entries',
  templateUrl: './log-entries.component.html',
  styleUrls: ['./log-entries.component.scss']
})
export class LogEntriesComponent implements OnInit {
  /** The current logistic system */
  public logisticSystem: LogisticSystem;
  /** The log entries for the current system */
  public logEntries: LogEntryList;

  /**
   * Constructor.
   * @param route the injected activated route
   * @param logisticSystemsService the injected logistic system service
   * @param logEntriesService the injected log entries service
   */
  public constructor(private route: ActivatedRoute, private logisticSystemsService: LogisticSystemsService,
    private logEntriesService: LogEntriesService) {
  }

  /** Angular lifer cycle method */
  public ngOnInit() {
    this.route.params.subscribe(async params => {
      const systemId = params.systemId;
      const result = await this.logisticSystemsService.loadLogisticSystem(systemId);
      if (result.isOk()) {
        this.logisticSystem = result.getValue();
        await this.loadLogEntries(systemId);
      }
    });
  }

  /**
   * Loads the log entries for the logistic system with the given id
   * @param systemId the id of the logistic system
   */
  private async loadLogEntries(systemId: number) {
    const result = await this.logEntriesService.loadLogEntries(systemId);
    if (result.isOk()) {
      this.logEntries = result.getValue();
    }
  }

}
