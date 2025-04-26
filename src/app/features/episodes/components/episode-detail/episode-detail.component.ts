import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../../../../core/models/episode.model';
import { Character } from '../../../../core/models/character.model';
import { EpisodeService } from '../../services/episode.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodeDetailComponent implements OnInit {
  episode!: Episode;
  characters: Character[] = [];

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.episode = this.route.snapshot.data.episode;
    this.loadCharacters();
  }

  loadCharacters(): void {
    if (this.episode && this.episode.characters && this.episode.characters.length > 0) {
      const characterRequests: Observable<Character>[] = [];

      this.episode.characters.forEach(characterUrl => {
        characterRequests.push(this.episodeService.getCharacterByUrl(characterUrl));
      });

      forkJoin(characterRequests).subscribe(characters => {
        this.characters = characters;
        this.cdr.markForCheck();
      });
    }
  }
}
