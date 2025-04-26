import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationListComponent } from './components/location-list/location-list.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { LocationDetailResolver } from './resolvers/location-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: LocationListComponent
  },
  {
    path: ':id',
    component: LocationDetailComponent,
    resolve: {
      location: LocationDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
