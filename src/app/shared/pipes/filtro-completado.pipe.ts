import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from 'src/models';

@Pipe( {
  name: 'filtroCompletado'
} )
export class FiltroCompletadoPipe implements PipeTransform {

  transform( listas: Lista[], completada?: boolean ) {
    return listas.filter( lista => {
      return lista.terminada === completada;
    } )
  }

}
