import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent {
  @Input() character: Character;
  @Output() onDisplayCharacter: EventEmitter<number> = new EventEmitter();

  borderCommonClass: string = "flex flex-row justify-center items-center p-2 my-5 rounded-full border-2";
  statusCommonClass: string = "w-2 h-2 max-w-2 max-h-2 rounded-full mr-1";
  selectCharacterHandler(): void {
    this.onDisplayCharacter.emit(this.character.id)
  }
}
