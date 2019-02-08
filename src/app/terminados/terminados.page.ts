import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/models';
import { DeseosService } from '../servicios/deseos.service';

@Component( {
  selector: 'app-terminados',
  templateUrl: './terminados.page.html',
  styleUrls: [ './terminados.page.scss' ],
} )
export class TerminadosPage implements OnInit {

  constructor ( public deseosService: DeseosService ) { }

  listaSeleccionada( lista: Lista ) {
    console.log( lista );
  }

  ngOnInit() {
  }


}
