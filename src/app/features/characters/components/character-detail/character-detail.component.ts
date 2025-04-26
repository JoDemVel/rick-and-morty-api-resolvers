import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../../../core/models/character.model';
import { Episode } from '../../../../core/models/episode.model';
import { ApiService } from '../../../../core/services/api.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailComponent implements OnInit {
  character!: Character;
  episodes: Episode[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.character = this.route.snapshot.data.character;
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    if (this.character && this.character.episode) {
      const episodeRequests: Observable<Episode>[] = [];

      this.character.episode.forEach(episodeUrl => {
        const episodeId = episodeUrl.split('/').pop();
        if (episodeId) {
          episodeRequests.push(this.apiService.get<Episode>(`episode/${episodeId}`));
        }
      });

      if (episodeRequests.length > 0) {
        forkJoin(episodeRequests).subscribe(episodes => {
          this.episodes = episodes;
          this.cdr.markForCheck();
        });
      }
    }
  }
}
