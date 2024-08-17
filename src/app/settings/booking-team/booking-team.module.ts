import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingTeamComponent } from './booking-team.component';
import { BookingTeamRoutingModule } from './booking-team-routing.module';

@NgModule({
  declarations: [BookingTeamComponent],
  imports: [CommonModule, BookingTeamRoutingModule],
})
export class BookingTeamModule {}
