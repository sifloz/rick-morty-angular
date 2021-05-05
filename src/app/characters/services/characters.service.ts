import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Character } from '../interfaces/character.interface';


@Injectable()
export class CharactersService {

  private _baseURL:string = 'https://rickandmortyapi.com/api';
  private _displayCharacter: boolean = false;
  private _character: Character;
  private _characters: Character[] = [];
  private _loading: boolean = false;
  private _doneFetching: boolean = false
  private _info = {
    count: 0,
    pages: 1,
    next: null,
    prev: null
  }
  private _error = {
    status: false,
    type: null,
    message: null
  }
  private _page: number = 1

  get character(): Character {
    return {...this._character};
  }

  get characters(): Character[] {
    return [...this._characters];
  }

  get displayCharacter(): boolean {
    let displayCharacterValue = this._displayCharacter;
    return displayCharacterValue;
  }

  get error() {
    return {...this._error}
  }

  get loading(): boolean {
    let loadingValue = this._loading;
    return loadingValue;
  }

  constructor(private http: HttpClient) { }

  displayCharacterHandler = (characterId: number | null = null): void => {
    if (characterId) {
      const characterIndex = this.characters.findIndex(item => item.id === characterId)
      this._character = this.characters[characterIndex] || null
    }
    
    let characterEpisodes = this._character.episode.map(item => item.slice(item.lastIndexOf('/')+1, item.length))

    this.http.get(this._baseURL+'/episode/'+characterEpisodes)
      .subscribe((resp: any) => {
        this._character.episodes = resp.id ? [resp] : resp
      });

    this._displayCharacter = characterId ? true : false
  }

  fetchCharactersHandler = (): void => {
    if (this._doneFetching) {
      return
    }
    this._loading = true
    this.http.get(this._baseURL+'/character?page='+this._page)
      .subscribe((resp: any) => {
        this._info = resp.info
        this._characters = [...this.characters].concat(resp.results)
        this._doneFetching = resp.info && !resp.info.next
        this._error = {
          status: false,
          type: null,
          message: null
        }
        this._loading = false
        this._page = this._page + 1
      }, (err) => {
        this._loading = false
        this._error = {
          status: true,
          type: err.response ? err.response.status : null,
          message: err.response ? err.response.data : err.request ? JSON.stringify(err.request) : err.message ? JSON.stringify(err.message) : 'An error has ocurred. Please refresh the page.'
        }
      })
  }

}