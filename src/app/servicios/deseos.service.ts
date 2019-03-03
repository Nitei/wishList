import { Injectable } from '@angular/core';
import { Lista } from 'src/models/index';
const enum booleans {
  Yes = 1,
  No = -1
}
@Injectable( {
  providedIn: 'root'
} )
export class DeseosService {

  listas: Lista[];

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

  // true if is a new List into this.listas.
  // false if are repeat into this.listas.
  // false if the title is void.
  newListInListas( titulo: string ) {
    let res = true;
    for ( const index of this.listas ) {
      if ( index.titulo === titulo ) {
        res = false;
        console.log( `Existe en la lista: ${ titulo }` );
        break;
      }
    }
    if ( titulo === '' ) {
      res = false;
      console.error( 'El título no puede estar vacio' );
    }
    return res;
  }

}
