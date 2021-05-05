import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html'
})
export class ErrorDisplayComponent {

  get error() {
    return this.charactersService.error
  }

  constructor(private charactersService: CharactersService) {}
}
