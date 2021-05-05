import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  ngOnInit() {
    this.charactersService.fetchCharactersHandler()
  }

  get character(): Character {
    return this.charactersService.character;
  }

  get characters(): Character[] {
    return this.charactersService.characters;
  }

  get displayCharacter(): boolean {
    return this.charactersService.displayCharacter;
  }

  constructor(private charactersService: CharactersService) { }
}
