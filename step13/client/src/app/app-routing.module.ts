import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LogEntriesComponent} from './log-entries/log-entries.component';
import {HardwareUsageComponent} from './hardware-usage/hardware-usage.component';

/** All the route of our application */
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "hardware-usage",
    component: HardwareUsageComponent
  },
  {
    path: "log-entries/:systemId",
    component: LogEntriesComponent
  },];

/** The routing module of our application */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
