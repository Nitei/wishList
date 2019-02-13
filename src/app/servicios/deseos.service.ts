import { Injectable } from '@angular/core';
import { Lista } from 'src/models/index';

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

  // Return false if the title exist in deseosService.listas
  existInListas( titulo: string ) {
    let res = true;
    for ( const index of this.listas ) {
      if ( titulo === '' || index.titulo === titulo ) {
        res = false;
        console.log( `Existe en la lista ${ titulo }` );
      }
    }
    return res;
  }

}
