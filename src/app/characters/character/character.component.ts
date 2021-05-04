import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent {
  @Input() character: Character;

  borderCommonClass: string = "flex flex-row justify-center items-center p-2 my-5 rounded-full border-2";
  statusCommonClass: string = "w-2 h-2 max-w-2 max-h-2 rounded-full mr-1";
 
  constructor(private charactersService: CharactersService) {}
 
  selectCharacterHandler(): void {
    this.charactersService.displayCharacterHandler(this.character.id)
  }
}
