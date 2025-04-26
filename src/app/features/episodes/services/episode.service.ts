import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Episode } from '../../../core/models/episode.model';
import { ApiResponse } from '../../../core/models/api-response.model';
import { Character } from '../../../core/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  constructor(private apiService: ApiService) {}

  getEpisodes(page: number = 1): Observable<ApiResponse<Episode>> {
    return this.apiService.get<ApiResponse<Episode>>('episode', { page });
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.apiService.get<Episode>(`episode/${id}`);
  }

  getCharacterByUrl(url: string): Observable<Character> {
    const id = url.split('/').pop();
    return this.apiService.get<Character>(`character/${id}`);
  }
}
