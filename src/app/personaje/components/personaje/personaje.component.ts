import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {
  idPersonaje: any = 1;
  idPagina: any = 1;
  person: any = 1;
  constructor(public ar: ActivatedRoute, public cs: CharactersService, public router: Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params => {
      console.log('params: ', params);
      this.idPersonaje = params.id;
      this.idPagina = params.page;
      this.getPersonaje(this.idPersonaje);
    });

  }

  getPersonaje(id): void{
    this.cs.getCharacter(id)
      .subscribe(data => {
        this.person = data;
      });
  }

  regresar(): void{
    this.router.navigate(['inicio', this.idPagina]);
  }

}
