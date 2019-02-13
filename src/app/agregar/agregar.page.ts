import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/models';
import { DeseosService } from '../servicios/deseos.service';
@Component( {
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: [ './agregar.page.scss' ],
} )
export class AgregarPage implements OnInit {

  titulo: ListaItem;

  lista: ListaItem[] = [];
  nombreItem = '';

  constructor (
    private route: ActivatedRoute,
    private deseosService: DeseosService ) {
    this.route.params.subscribe( ( data: any ) => {
      this.titulo = data[ 'titulo' ];
    } );
  }

  agregarItem() {

    if ( this.nombreItem.length === 0 ) {
      return;
    } else {
      const nuevoItem = new ListaItem( this.nombreItem );
      this.lista.push( nuevoItem );
      this.nombreItem = '';
    }
    console.log( this.lista );
  }

  actualizaItem( item: ListaItem ) {
    item.completado = !item.completado;
  }

  ngOnInit() {
    this.lista.push( new ListaItem( 'Felicidad' ) );
  }

}
