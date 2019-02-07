import { Injectable } from '@angular/core';
import { Lista } from 'src/models/index';

@Injectable( {
  providedIn: 'root'
} )
export class DeseosService {

  listas: Lista[] = [];

  constructor () {
    const lista1 = new Lista( 'Recolectar piedras del infinito' );
    const lista2 = new Lista( 'Heroes a vencer' );

    this.listas.push( lista1, lista2 );

    console.log( this.listas );
  }


}
