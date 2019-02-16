import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/models';
import { DeseosService } from '../servicios/deseos.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-terminados',
  templateUrl: './terminados.page.html',
  styleUrls: [ './terminados.page.scss' ],
} )
export class TerminadosPage implements OnInit {

  constructor ( public deseosService: DeseosService, private route: Router ) {

  }

  listaSeleccionada( lista: Lista, idx: number ) {
    console.log( idx );
    this.route.navigate( [ '/tabs/agregar/', lista.titulo, idx ] );
  }

  borrarLista( item: Lista ) {
    this.deseosService.listas.splice( this.deseosService.listas.indexOf( item ), 1 );
    this.deseosService.guardarStorage();
  }

  ngOnInit() {
  }


}
