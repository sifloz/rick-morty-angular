import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    CharacterComponent,
    ListComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CharactersModule { }
