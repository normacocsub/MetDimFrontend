import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  {
    respuesta: 'Si',
    calificacion: '1',
    interpretacion: 'Cuando existe o tiene un nivel bueno o Cuando se dispone de los elementos, recursos o cuando ' +
      'se realizan los procedimientos de manera parcial entre otros.'
  },
  {
    respuesta: 'No',
    calificacion: '0',
    interpretacion: 'Cuando no existe o tiene un nivel deficiente.'
  },
  {
    respuesta: 'Parcial',
    calificacion: '0.5',
    interpretacion: 'Cuando la implementación no está terminada o tiene un nivel regular o Cuando se carece de los ' +
      'elementos, recursos o cuando no se realizan los procedimientos, entre otros.'
  }
];

const ELEMENT_DATA2 = [
  {
    rango: '0 - 1',
    interpretacion: 'Alta',
    color: 'Rojo',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.naaix.com%2Fimg%2Fp%2F2%2F6%2F8%2F4%2F2684-large_default.jpg&f=1&nofb=1&ipt=c16f50a5bed966348e9e7d1cf33569a3c320005e918219f097e242336e9d828e&ipo=images'
  },
  {
    rango: '1.01 - 2.00',
    interpretacion: 'Media',
    color: 'Amarillo',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.emoji.co.uk%2Ffiles%2Fgoogle-emojis%2Fsymbols-android%2F8173-small-orange-diamond.png&f=1&nofb=1&ipt=df2b2feb3fc40a4b6df98be2eff8e1f65c5433f0492424da7dd9dd5b7e28927d&ipo=images'
  },
  {
    rango: '2.01 - 3.00',
    interpretacion: 'Baja',
    color: 'Verde',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-wUY-CDXH0xE%2FWBNhPLOwbxI%2FAAAAAAAAADE%2FQ2OGv7QyxLgaUSIwQmNyG3mrF9Zueh17wCLcB%2Fs1600%2FRombo-Verde.jpg&f=1&nofb=1&ipt=7e5c80e61f536ef8914beff17d8ecbb0e74e7719c1ab96bda4e016486bda4402&ipo=images'
  }
];

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Respuesta', 'Interpretacion', 'Calificacion'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['Rango', 'Interpretacion', 'Color'];
  dataSource2 = ELEMENT_DATA2;
}
