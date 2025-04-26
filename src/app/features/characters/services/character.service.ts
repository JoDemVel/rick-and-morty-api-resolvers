import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Character } from '../../../core/models/character.model';
import { ApiResponse } from '../../../core/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private apiService: ApiService) {}

  getCharacters(page: number = 1): Observable<ApiResponse<Character>> {
    return this.apiService.get<ApiResponse<Character>>('character', { page });
  }

  getCharacterById(id: number): Observable<Character> {
    return this.apiService.get<Character>(`character/${id}`);
  }
}
