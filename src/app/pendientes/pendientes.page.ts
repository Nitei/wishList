import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../servicios/deseos.service';
import { Lista } from 'src/models';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
  styleUrls: [ './pendientes.page.scss' ],
} )
export class PendientesPage implements OnInit {
  listas: Lista[];

  constructor (
    public deseosService: DeseosService,
    private alertController: AlertController,
    private route: Router
  ) {
    this.listas = this.deseosService.listas;
  }

  listaSeleccionada( lista: Lista, idx: number ) {
    this.route.navigate( [ '/tabs/agregar/', lista.titulo, idx ] );
  }

  async agregarLista() {
    const alerta = await this.alertController.create( {
      header: 'Nueva lista',
      subHeader: 'Nombre de la nueva lista que se desea',
      message: 'Nombre de la nueva lista',
      buttons: [ {
        text: 'Cancelar',
      }, {
        text: 'Agregar',
        handler: lista => {
          if ( this.deseosService.existInListas( lista.titulo ) ) {
            this.route.navigate( [ '/tabs/agregar/', lista.titulo ] );
          }
        }
      } ],
      inputs: [ {
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      } ]
    } );
    await alerta.present();
  }

  borrarLista( item: Lista ) {
    this.deseosService.listas.splice( this.deseosService.listas.indexOf( item ), 1 );
    this.deseosService.guardarStorage();
  }

  ngOnInit() {
    console.log( this.deseosService.listas );
  }

}
