import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { BookingWorkdayComponent } from './booking-workday/booking-workday.component';
import { BookingWorkplaceComponent } from './booking-workplace/booking-workplace.component';
import { BookingConferenceComponent } from './booking-conference/booking-conference.component';
import { BookingTeamComponent } from './booking-team/booking-team.component';

@NgModule({
  declarations: [
    SettingsComponent,
    BookingWorkdayComponent,
    BookingWorkplaceComponent,
    BookingConferenceComponent,
    BookingTeamComponent,
  ],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule {}
