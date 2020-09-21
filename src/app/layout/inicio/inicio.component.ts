import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/services/characters.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  characters:any;
  constructor(private cs:CharactersService) { }

  ngOnInit(): void {
    this.cs.getChracters(1).subscribe( (data:any) => {
      console.log(data);
      
      this.characters=data.results;
    }) 
  }

}
