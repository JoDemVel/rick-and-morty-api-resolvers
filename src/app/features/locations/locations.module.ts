import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationListComponent } from './components/location-list/location-list.component';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    LocationListComponent,
    LocationCardComponent,
    LocationDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LocationsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class LocationsModule { }
