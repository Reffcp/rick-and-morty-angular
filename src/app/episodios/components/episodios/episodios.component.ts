import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {
  episodes: any;
  page = 1;
  idpage = '1';
  pages: any = [];
  constructor(private cs: CharactersService, public router: Router, public ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.idpage = this.ar.snapshot.paramMap.get('page');
    if (this.idpage !== undefined) {
      this.page = + this.idpage;
      this.pages = [];
    }
    this.getEpisodes();
  }

  getEpisodes(): void{
    this.cs.getEpisodes(this.page).subscribe( (data: any) => {
      console.log(data);
      this.episodes = data;
      this.crearPaginas();
    });
  }

  crearPaginas(): void{
    this.pages = [];
    for (let x = 0; x < 5; x++) {
        if (this.episodes.info.pages > x) {
          let pagina = this.page;
          pagina = pagina + x;
          this.pages.push(
            {number: pagina,
            activa: (this.page === pagina) ? 'pagina-activa' : ''
            }
            );
        }
    }
  }

  siguiente(): void{
    if (this.episodes.info.pages > this.page) {
    this.page++;
    this.getEpisodes();
    }
  }

  anterior(): void{
    if (this.page > 1) {
      this.page--;
      this.getEpisodes();
    }
  }

  irAPag(pagina): void{
    this.page = pagina;
    this.getEpisodes();
    this.router.navigate(['episodios', pagina]);
  }

}
