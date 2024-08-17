import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingConferenceComponent } from './booking-conference.component';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  { path: '', component: BookingConferenceComponent, data: { title: marker('BookingConference') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BookingConferenceRoutingModule {}
