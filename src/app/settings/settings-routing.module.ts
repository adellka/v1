import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { BookingWorkplaceComponent } from './booking-workplace/booking-workplace.component';
import { BookingWorkdayComponent } from './booking-workday/booking-workday.component';
import { BookingTeamComponent } from './booking-team/booking-team.component';
import { BookingConferenceComponent } from './booking-conference/booking-conference.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [{ path: 'booking-workplace', component: BookingWorkplaceComponent }],
  },
  {
    path: '',
    component: SettingsComponent,
    children: [{ path: 'booking-workday', component: BookingWorkdayComponent }],
  },
  {
    path: '',
    component: SettingsComponent,
    children: [{ path: 'booking-team', component: BookingTeamComponent }],
  },
  {
    path: '',
    component: SettingsComponent,
    children: [{ path: 'booking-conference', component: BookingConferenceComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
