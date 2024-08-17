import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingConferenceComponent } from './booking-conference.component';
import { BookingConferenceRoutingModule } from './booking-conference-routing.module';

@NgModule({
  declarations: [BookingConferenceComponent],
  imports: [CommonModule, BookingConferenceRoutingModule],
})
export class BookingConferenceModule {}
