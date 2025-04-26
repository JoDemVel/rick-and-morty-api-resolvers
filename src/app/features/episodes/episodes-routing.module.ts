import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { EpisodeDetailResolver } from './resolvers/episode-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: EpisodeListComponent
  },
  {
    path: ':id',
    component: EpisodeDetailComponent,
    resolve: {
      episode: EpisodeDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
