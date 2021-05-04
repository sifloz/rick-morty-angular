import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html'
})
export class CharacterDetailComponent {

  bulletComonClass = 'w-2 h-2 max-w-2 max-h-2 rounded-full mr-1 ';

  get character(): Character {
    return this.charactersService.character;
  }

  constructor(private charactersService: CharactersService) {}

  toggleHandler(): void {
    this.charactersService.displayCharacterHandler(null)
  }
}
