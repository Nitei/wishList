import { Injectable } from '@angular/core';
import { Lista } from 'src/models/index';

@Injectable( {
  providedIn: 'root'
} )
export class DeseosService {

  listas: Lista[] = [];

  constructor () { }

  agregarLista( lista: Lista ) {
    this.listas.push( lista );
  }


}
