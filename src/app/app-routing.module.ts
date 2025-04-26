import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./features/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./features/locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./features/episodes/episodes.module').then(m => m.EpisodesModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
