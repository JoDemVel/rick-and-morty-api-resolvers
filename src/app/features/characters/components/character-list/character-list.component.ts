import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CharacterGraphqlService } from '../../services/character-graphql.service'; // Cambiado el servicio
import { Character } from '../../../../core/models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  currentPage = 1;
  totalPages = 0;

  constructor(
    private characterService: CharacterGraphqlService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService
      .getCharacters(this.currentPage)
      .subscribe((response) => {
        this.characters = response.characters.results;
        this.totalPages = response.characters.info.pages;
        this.cdr.markForCheck();
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadCharacters();
  }
}
