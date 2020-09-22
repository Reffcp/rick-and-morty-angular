import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  
  constructor(private http:HttpClient) { }


  getChracters(page){
    return this.http.get('https://rickandmortyapi.com/api/character?page='+((page!=undefined ? page : '1')));
  }

  getCharacter(id){
    return this.http.get('https://rickandmortyapi.com/api/character/'+id);
  }
}
