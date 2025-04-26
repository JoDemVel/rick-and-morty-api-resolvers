// src/app/features/episodes/components/episode-card/episode-card.component.ts
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Episode } from '../../../../core/models/episode.model';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodeCardComponent {
  @Input() episode!: Episode;
}
