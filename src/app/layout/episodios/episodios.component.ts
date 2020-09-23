import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {
  episodes:any;
  page:number =1;
  idpage:string ="1";
  pages:any =[];
  constructor(private cs:CharactersService, public router:Router, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.idpage = this.ar.snapshot.paramMap.get('page');
    if (this.idpage!=undefined) {
      this.page=+this.idpage;
      this.pages=[]
    }
    this.getEpisodes();
  }

  getEpisodes(){
    this.cs.getEpisodes(this.page).subscribe( (data:any) => {
      console.log(data);
      this.episodes=data;
      this.crearPaginas();
    }) 
  }

  crearPaginas(){
    this.pages=[];
    for (let x = 0; x < 5; x++) {
        if (this.episodes.info.pages>x) {
          let pagina= this.page;
          pagina=pagina+x;
          this.pages.push(
            {number: pagina,
            activa: (this.page==pagina) ? 'pagina-activa':''
            }
            )
        }
    }
  }

  siguiente(){
    if (this.episodes.info.pages>this.page) {
    this.page++;
    this.getEpisodes();
    }
  }

  anterior(){
    if (this.page>1) {
      this.page--;
    this.getEpisodes();
    }
  }

  irAPag(pagina){
    this.page=pagina;
    this.getEpisodes();
    this.router.navigate(['episodios',pagina]);
  }

  detallePersonaje(id){
    // this.router.navigate(['personaje',id,this.page]);
  }

}
