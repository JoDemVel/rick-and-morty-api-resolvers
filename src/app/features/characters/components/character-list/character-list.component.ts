import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { CharacterService } from '../../services/character.service';
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
    private characterService: CharacterService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService
      .getCharacters(this.currentPage)
      .subscribe((response) => {
        this.characters = response.results;
        this.totalPages = response.info.pages;
        this.cdr.markForCheck();
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadCharacters();
  }
}
