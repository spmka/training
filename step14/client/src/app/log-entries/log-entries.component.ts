import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LogisticSystemsService} from '../logistic-systems/logistic-systems.service';
import {LogEntriesService} from './log-entries.service';
import {LogisticSystem, LogisticSystemList} from '../../../../server/logistic-systems/logistic-system.model';
import {LogEntryList} from '../../../../server/log-entries/log-entry.model';


/** Component to show the log entries for a logistic system */
@Component({
  selector: 'app-log-entries',
  templateUrl: './log-entries.component.html',
  styleUrls: ['./log-entries.component.scss']
})
export class LogEntriesComponent implements OnInit {
  /** The current logistic system */
  public logisticSystems: LogisticSystemList;
  /** The current logistic system */
  public logisticSystem: LogisticSystem;
  /** The filtered log entries list which is displayed in the template */
  public filteredLogEntries: LogEntryList;
  /** The log entries for the current system */
  private logEntries: LogEntryList;

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
      const resultSystem = await this.logisticSystemsService.loadLogisticSystem(systemId);
      if (resultSystem.isOk()) {
        this.logisticSystem = resultSystem.getValue();
        await this.loadLogEntries(systemId);
      }
      const resultSystems = await this.logisticSystemsService.loadLogisticSystems();
      if (resultSystems.isOk()) {
        this.logisticSystems = resultSystems.getValue();
      }
    });
  }

  /**
   * Called when a system is selected
   * @param system the selected system.
   */
  public async onSystemChange(system: LogisticSystem) {
    this.logisticSystem = system;
    await this.loadLogEntries(system.id);
  }

  /**
   * Called when a new filter string is entered.
   * @param filter the entered filter string.
   */
  public onFilterChange(filter: string) {
    this.filteredLogEntries = this.logEntries
      .filter(logEntry => logEntry.message.toLowerCase().includes(filter.toLowerCase()));
  }

  /**
   * Loads the log entries for the logistic system with the given id
   * @param systemId the id of the logistic system
   */
  private async loadLogEntries(systemId: number) {
    const result = await this.logEntriesService.loadLogEntries(systemId);
    if (result.isOk()) {
      this.logEntries = result.getValue();
      this.filteredLogEntries = this.logEntries.slice();
    }
  }

}
