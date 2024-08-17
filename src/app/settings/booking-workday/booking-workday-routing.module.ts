import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingWorkdayComponent } from './booking-workday.component';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [{ path: '', component: BookingWorkdayComponent, data: { title: marker('BookingWorkday') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BookingWorkdayRoutingModule {}
