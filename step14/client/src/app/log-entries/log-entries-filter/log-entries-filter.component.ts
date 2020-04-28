import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {LogisticSystemList, LogisticSystem} from '../../../../../server/logistic-systems/logistic-system.model';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

/** A filter component that can choose a logistic system and input a filter value */
@Component({
  selector: 'app-log-entries-filter',
  templateUrl: './log-entries-filter.component.html',
  styleUrls: ['./log-entries-filter.component.scss']
})
export class LogEntriesFilterComponent implements OnInit {
  /** The list of possible logistic systems to choose from */
  @Input() public logisticSystems: LogisticSystemList;
  /** Event emitter that emits the choosen system */
  @Output() private systemChange: EventEmitter<LogisticSystem> = new EventEmitter();
  /** Event emitter that emits the entered filter value */
  @Output() private filterChange: EventEmitter<string> = new EventEmitter();
  /** The form group for the input form */
  public filterFormGroup: FormGroup;
  /** The timestamp of the last emit */
  public lastEmit: Date;

  /** Angular life cycle method */
  public ngOnInit(): void {
    this.createForm();
  }

  /** Creates the form */
  private createForm() {
    this.filterFormGroup = new FormGroup({
      logisticSystem: new FormControl('', [Validators.required]),
      logFilter: new FormControl('', [Validators.required])
    });
    this.filterFormGroup.get('logisticSystem')
      .valueChanges.subscribe(newValue => this.onSystemChange(newValue));
    // Every 1000ms and when the entered value has chaged we call onFilterChange()
    this.filterFormGroup.get('logFilter')
      .valueChanges.pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(newValue => this.onFilterChange(newValue));
  }

  /**
   * Called when the user selects a system from the list.
   * @param logisticSystem the selected logistic system.
   */
  private onSystemChange(logisticSystem: LogisticSystem){
    console.log(logisticSystem);
    this.lastEmit = new Date();
    this.systemChange.emit(logisticSystem);
  }

  /**
   * Called when the user enters a value in the input field.
   * @param filterValue the entered value of the input field.
   */
  private onFilterChange(filterValue: string) {
    console.log(filterValue);
    this.lastEmit = new Date();
    this.filterChange.emit(filterValue);
  }
}