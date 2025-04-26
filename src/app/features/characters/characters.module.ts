import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterCardComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CharactersRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class CharactersModule { }
