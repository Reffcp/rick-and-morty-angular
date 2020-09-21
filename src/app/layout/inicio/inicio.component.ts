import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/services/characters.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  characters:any;
  page:number =1;
  constructor(private cs:CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  siguiente(){
    this.page++;
    this.getCharacters();
  }

  anterior(){
    this.page--;
    this.getCharacters();
  }

  getCharacters(){
    this.cs.getChracters(this.page).subscribe( (data:any) => {
      console.log(data);
      this.characters=data;
    }) 
  }

}
