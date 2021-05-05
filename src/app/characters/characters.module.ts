import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CharacterComponent } from './character/character.component';
import { ListComponent } from './list/list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import { CharactersService } from './services/characters.service';
import { InfinteScrollComponent } from './infinte-scroll/infinte-scroll.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LoaderComponent } from './loader/loader.component';
import { ErrorDisplayComponent } from './error-display/error-display.component';



@NgModule({
  declarations: [
    CharacterComponent,
    ListComponent,
    CharacterDetailComponent,
    InfinteScrollComponent,
    LoaderComponent,
    ErrorDisplayComponent,
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ],
  providers: [
    CharactersService
  ]
})
export class CharactersModule { }