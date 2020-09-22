import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {
  idPersonaje:any=1;
  person:any=1;
  constructor(public ar:ActivatedRoute,public cs:CharactersService) { }

  ngOnInit(): void {
    this.idPersonaje = this.ar.snapshot.paramMap.get('id');
    this.getPersonaje(this.idPersonaje)
  }

  getPersonaje(id){
    this.cs.getCharacter(id)
      .subscribe(data => {
        this.person=data;
      })
  }

}
