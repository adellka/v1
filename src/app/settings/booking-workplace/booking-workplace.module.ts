import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingWorkplaceComponent } from './booking-workplace.component';
import { BookingWorkplaceRoutingModule } from './booking-workplace-routing.module';

@NgModule({
  declarations: [BookingWorkplaceComponent],
  imports: [CommonModule, BookingWorkplaceRoutingModule],
})
export class BookingWorkplaceModule {}
