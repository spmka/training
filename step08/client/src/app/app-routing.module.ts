import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

/** All the route of our application */
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  }
];

/** The routing module of our application */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
