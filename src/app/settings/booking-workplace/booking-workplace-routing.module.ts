import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingWorkplaceComponent } from './booking-workplace.component';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  { path: '', component: BookingWorkplaceComponent, data: { title: marker('BookingWorkplace') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BookingWorkplaceRoutingModule {}
