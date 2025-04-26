import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    EpisodeListComponent,
    EpisodeCardComponent,
    EpisodeDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EpisodesRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class EpisodesModule { }
