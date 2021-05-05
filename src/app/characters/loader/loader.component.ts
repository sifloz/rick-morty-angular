import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
})
export class LoaderComponent {

  get loading(): boolean {
    return this.charactersService.loading;
  }

  constructor(private charactersService: CharactersService) { }

}
