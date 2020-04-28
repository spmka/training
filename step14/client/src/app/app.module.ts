import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import {NgxEchartsModule} from 'ngx-echarts';
import {LogEntriesComponent} from './log-entries/log-entries.component';
import {HardwareUsageComponent} from './hardware-usage/hardware-usage.component';
import {CpuUsageComponent} from './hardware-usage/cpu-usage/cpu-usage.component';
import {DiskUsageComponent} from './hardware-usage/disk-usage/disk-usage.component';
import {ThreadsComponent} from './hardware-usage/threads/threads.component';
import {LogEntriesFilterComponent} from './log-entries/log-entries-filter/log-entries-filter.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LogEntriesComponent,
    HardwareUsageComponent,
    CpuUsageComponent,
    DiskUsageComponent,
    ThreadsComponent,
    LogEntriesFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxEchartsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
