import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {
  idPersonaje:any=1;
  idPagina:any=1;
  person:any=1;
  constructor(public ar:ActivatedRoute,public cs:CharactersService, public router:Router) { }

  ngOnInit(): void {
    this.idPersonaje = this.ar.snapshot.paramMap.get('id');
    this.idPagina = this.ar.snapshot.paramMap.get('page');
    this.getPersonaje(this.idPersonaje)
  }

  getPersonaje(id){
    this.cs.getCharacter(id)
      .subscribe(data => {
        this.person=data;
      })
  }

  regresar(){
    this.router.navigate(['inicio',this.idPagina])
  }

}
