import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html'
})
export class CharacterDetailComponent {
  @Input() character: Character;
  @Input() displayCharacter: boolean = false;
  @Output() onToggle: EventEmitter<null> = new EventEmitter();

  toggleHandler(): void {
    this.onToggle.emit(null)
  }
}
