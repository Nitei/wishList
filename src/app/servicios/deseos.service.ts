import { Injectable } from '@angular/core';
import { Lista } from 'src/models/index';

@Injectable( {
  providedIn: 'root'
} )
export class DeseosService {

  listas: Lista[] = [];

  constructor () {
    this.cargarStorage();
  }


  guardarStorage() {
    localStorage.setItem( 'itemLista', JSON.stringify( this.listas ) );
  }

  cargarStorage() {
    if ( localStorage.getItem( 'itemLista' ) ) {
      this.listas = JSON.parse( localStorage.getItem( 'itemLista' ) );
    }
  }

  agregarLista( lista: Lista ) {
    this.listas.push( lista );
    this.guardarStorage();
  }


}
