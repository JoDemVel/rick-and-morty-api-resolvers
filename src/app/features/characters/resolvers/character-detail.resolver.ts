import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterService } from '../services/character.service';
import { Character } from '../../../core/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailResolver implements Resolve<Character> {
  constructor(private characterService: CharacterService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character> {
    const id = parseInt(route.paramMap.get('id') || '1', 10);
    return this.characterService.getCharacterById(id);
  }
}
