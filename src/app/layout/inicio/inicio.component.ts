import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from '../../shared/services/characters.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  characters:any;
  page:number =1;
  pages:any =[];
  constructor(private cs:CharactersService, public router:Router) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  siguiente(){
    if (this.characters.info.pages>this.page) {
    this.page++;
    this.getCharacters();
    }
  }

  anterior(){
    if (this.page>1) {
      this.page--;
    this.getCharacters();
    }
  }

  getCharacters(){
    this.cs.getChracters(this.page).subscribe( (data:any) => {
      console.log(data);
      this.characters=data;
      this.crearPaginas();
    }) 
  }

  crearPaginas(){
    this.pages=[];
    for (let x = 0; x < 5; x++) {
        if (this.characters.info.pages>x) {
          let pagina= this.page;
          pagina=pagina+x;
          this.pages.push({number: pagina})
        }
    }
  }

  irAPag(pagina){
    this.page=pagina;
    this.getCharacters();
  }

  detallePersonaje(id){
    this.router.navigate(['personaje',id]);
  }

}
