import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingTeamComponent } from './booking-team.component';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [{ path: '', component: BookingTeamComponent, data: { title: marker('BookingTeam') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BookingTeamRoutingModule {}
