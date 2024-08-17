import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingWorkplaceComponent } from './booking-workplace/booking-workplace.component';
import { BookingWorkdayComponent } from './booking-workday/booking-workday.component';
import { BookingTeamComponent } from './booking-team/booking-team.component';
import { BookingConferenceComponent } from './booking-conference/booking-conference.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(public dialog: MatDialog) {}

  openBookingWorkplace(): void {
    this.dialog.open(BookingWorkplaceComponent);
  }
  openBookingWorkday(): void {
    this.dialog.open(BookingWorkdayComponent);
  }
  openBookingTeam(): void {
    this.dialog.open(BookingTeamComponent);
  }
  openBookingConference(): void {
    this.dialog.open(BookingConferenceComponent);
  }
}
