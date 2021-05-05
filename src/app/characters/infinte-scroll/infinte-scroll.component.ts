import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-infinte-scroll',
  template: `
    <div
      infinite-scroll
      [infiniteScrollDistance]="2"
      [infiniteScrollThrottle]="50"
      (scrolled)="onScroll()"
    ></div>
  `
})
export class InfinteScrollComponent {

  constructor(private charactersService: CharactersService) {}

  onScroll(): void {
    this.charactersService.fetchCharactersHandler()
  }
}
