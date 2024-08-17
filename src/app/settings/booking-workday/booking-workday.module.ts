import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingWorkdayComponent } from './booking-workday.component';
import { BookingWorkdayRoutingModule } from './booking-workday-routing.module';

@NgModule({
  declarations: [BookingWorkdayComponent],
  imports: [CommonModule, BookingWorkdayRoutingModule],
})
export class BookingWorkdayModule {}
