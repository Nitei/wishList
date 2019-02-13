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



  constructor (
    public deseosService: DeseosService,
    private alertController: AlertController,
    private route: Router
  ) { }

  listaSeleccionada( lista: Lista ) {
    console.log( lista );
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
        handler: data => {
          if ( data.titulo === '' ) { return; }
          this.route.navigate( [ '/tabs/agregar/', data.titulo ] );
          console.log( data );
        }
      } ],
      inputs: [ {
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      } ]
    } );
    await alerta.present();
  }

  ngOnInit() {
  }

}
