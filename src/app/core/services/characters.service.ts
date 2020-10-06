import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) { }

  getChracters(page){
    return this.http.get('https://rickandmortyapi.com/api/character?page=' + ((page !== undefined ? page : '1')));
  }

  getEpisodes(page){
    return this.http.get('https://rickandmortyapi.com/api/episode?page=' + ((page !== undefined ? page : '1')));
  }

  getCharacter(id){
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }
}
