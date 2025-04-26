import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '../../../../core/models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {
  @Input() character!: Character;

  getStatusColor(): string {
    switch (this.character.status.toLowerCase()) {
      case 'alive': return 'green';
      case 'dead': return 'red';
      default: return 'gray';
    }
  }
}
