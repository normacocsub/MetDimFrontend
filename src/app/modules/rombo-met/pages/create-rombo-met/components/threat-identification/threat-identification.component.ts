import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-threat-identification',
  templateUrl: './threat-identification.component.html',
  styleUrls: ['./threat-identification.component.css']
})
export class ThreatIdentificationComponent implements OnInit {


  threats = {
    naturales : [
      'Movimientos sísmicos',
      'Lluvias torrenciales',
      'Granizadas',
      'Inundación',
      'Caída de rayos',
      'Vientos fuertes'
    ],
    tecnologicos : [
      'Fallas estructurales',
      'Fallas no estructurales',
      'Fallas en equipos y sistemas',
      'Incendio y/o Explosión',
      'Materiales químicos peligrosos',
      'Tareas de alto riesgos'
    ],
    sociales : [
      'Aglomeraciones',
      'Terrorismo',
      'Accidentes de transito'
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }



}
