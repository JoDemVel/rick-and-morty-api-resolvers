import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EpisodeService } from '../services/episode.service';
import { Episode } from '../../../core/models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeDetailResolver implements Resolve<Episode> {
  constructor(private episodeService: EpisodeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Episode> {
    const id = parseInt(route.paramMap.get('id') || '1', 10);
    return this.episodeService.getEpisodeById(id);
  }
}
