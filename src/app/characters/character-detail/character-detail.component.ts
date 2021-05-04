import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html'
})
export class CharacterDetailComponent {

  bulletComonClass = 'w-2 h-2 max-w-2 max-h-2 rounded-full mr-1 ';

  // @Input() character: Character = {
  //   id: null,
  //   name: '',
  //   status: '',
  //   species: '',
  //   type: '',
  //   gender: '',
  //   origin: {
  //     name: '',
  //     url: '',
  //   },
  //   location: {
  //     name: '',
  //     url: '',
  //   },
  //   image: '',
  //   episode: [],
  //   url: '',
  //   created: '',
  //   episodes: []
  // };
  // @Output() onToggle: EventEmitter<null> = new EventEmitter();

  get character(): Character {
    return this.charactersService.character;
  }


  constructor(private charactersService: CharactersService) {}

  toggleHandler(): void {
    // this.onToggle.emit(null)
    this.charactersService.displayCharacterHandler(null)
  }
}
