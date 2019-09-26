import { Component, OnInit } from '@angular/core';
import { Team } from '../model/Team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

   teams: Team [];

  constructor() {
    this.teams = [
    {
    profileImg: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/147/147.png',  
    position: 1,
    name: "Queretaro",
    ubication: "Queretaro",
    stadium: "La Corregidora"
    },
     {
    profileImg: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/147/147.png', 
    position: 2,
    name: "Santos Laguna",
    ubication: "Torreon",
    stadium: "Territorio Santos"
    },
     {
    profileImg: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/147/147.png', 
    position: 3,
    name: "America",
    ubication: "CDMX",
    stadium: "Azteca"
    },
     {
    profileImg: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/147/147.png',    
    position: 4,
    name: "UANL",
    ubication: "Monterrey",
    stadium: "La Corregidora"
    },
     {
    profileImg: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/147/147.png',    
    position: 5,
    name: "Necaxa",
    ubication: "Aguascalientes",
    stadium: "Victoria"
    },
    {
    profileImg: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/147/147.png',    
    position: 6,
    name: "Leon",
    ubication: "Leon",
    stadium: "Nou Camp"
    },
    {
    profileImg: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/147/147.png',    
    position: 7,
    name: "Tijuana",
    ubication: "Tijuana",
    stadium: "Caliente"
    },
    {
    profileImg: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/147/147.png',    
    position: 8,
    name: "UNAM",
    ubication: "CDMX",
    stadium: "Olimpico Universitario"
    }
]
   }

  ngOnInit() {
  }

}
