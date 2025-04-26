import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { EpisodeService } from '../../services/episode.service';
import { Episode } from '../../../../core/models/episode.model';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeListComponent implements OnInit {
  episodes: Episode[] = [];
  currentPage = 1;
  totalPages = 0;

  constructor(
    private episodeService: EpisodeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.episodeService.getEpisodes(this.currentPage).subscribe((response) => {
      this.episodes = response.results;
      this.totalPages = response.info.pages;
      this.cdr.markForCheck();
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadEpisodes();
  }
}
