import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Location } from '../../../core/models/location.model';
import { ApiResponse } from '../../../core/models/api-response.model';
import { Character } from '../../../core/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private apiService: ApiService) {}

  getLocations(page: number = 1): Observable<ApiResponse<Location>> {
    return this.apiService.get<ApiResponse<Location>>('location', { page });
  }

  getLocationById(id: number): Observable<Location> {
    return this.apiService.get<Location>(`location/${id}`);
  }

  getCharacterByUrl(url: string): Observable<Character> {
    const id = url.split('/').pop();
    return this.apiService.get<Character>(`character/${id}`);
  }
}
