import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterComponent } from './character/character.component';
import { ListComponent } from './list/list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import { CharactersService } from './services/characters.service';



@NgModule({
  declarations: [
    CharacterComponent,
    ListComponent,
    CharacterDetailComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CharactersService
  ]
})
export class CharactersModule { }
