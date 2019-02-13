import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem, Lista } from 'src/models';
import { DeseosService } from '../servicios/deseos.service';
@Component( {
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: [ './agregar.page.scss' ],
} )
export class AgregarPage implements OnInit {

  titulo: string;

  lista: Lista;
  nombreItem: string;

  constructor (
    private route: ActivatedRoute, private deseosService: DeseosService ) {
    this.route.params.subscribe( ( data: any ) => {
      this.titulo = data[ 'titulo' ];

      this.lista = new Lista( this.titulo );
      this.deseosService.agregarLista( this.lista );

    } );
  }

  agregarItem() {

    if ( this.nombreItem === '' ) {
      return;
    } else {
      const nuevoItem = new ListaItem( this.nombreItem );
      this.lista.items.push( nuevoItem );
      this.nombreItem = '';
    }
    console.log( this.lista );
  }

  actualizaItem( item: ListaItem ) {
    item.completado = !item.completado;
  }

  borrarItem( item: number ) {
    this.lista.items.splice( item, 1 );
    console.log( item );
  }


  ngOnInit() {
    // this.lista.items.push( new ListaItem( 'Felicidad' ) );
    // this.lista.items.push( new ListaItem( 'Amor' ) );
  }

}
