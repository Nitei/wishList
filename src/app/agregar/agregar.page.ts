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
  indexOfList: number;

  lista: Lista;
  nombreItem: string;

  constructor (
    private route: ActivatedRoute, private deseosService: DeseosService ) {
    this.route.params.subscribe( ( data: any ) => {
      this.titulo = data[ 'titulo' ];

      if ( this.deseosService.existInListas( this.titulo ) ) {
        // If the list not exist we create an new list and push into the array of lists.
        this.lista = new Lista( this.titulo );
        this.deseosService.agregarLista( this.lista );
      } else {
        // If the list exist we find it in the array of list with the index passed in the url by param.
        this.indexOfList = data[ 'lista' ];
        this.lista = this.deseosService.listas[ this.indexOfList ];
      }
    } );
  }

  agregarItem() {

    if ( this.nombreItem !== '' ) {
      const nuevoItem = new ListaItem( this.nombreItem );
      if ( this.indexOfList === undefined ) {
        // If the list not exist we will find the lastone list in the array and we push the new item.
        this.deseosService.listas[ this.deseosService.listas.length - 1 ].items.push( nuevoItem );
      } else {
        // if the list exist we find the list in the array by index and push the new item.
        this.deseosService.listas[ this.indexOfList ].items.push( nuevoItem );
      }
      this.nombreItem = '';
      this.deseosService.guardarStorage();
    }
  }

  actualizaItem( item: ListaItem ) {
    item.completado = !item.completado;

    const pendientes = this.lista.items.filter( itemData => {
      return !itemData.completado;
    } ).length;

    if ( pendientes === 0 ) {
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
      console.log( this.lista );
    } else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
      console.log( this.lista );
    }

    this.deseosService.guardarStorage();
  }

  borrarItem( item: number ) {
    this.lista.items.splice( item, 1 );
    console.log( item );
  }


  ngOnInit() {

  }

}
