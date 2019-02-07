import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../servicios/deseos.service';

@Component( {
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
  styleUrls: [ './pendientes.page.scss' ],
} )
export class PendientesPage implements OnInit {

  constructor ( public deseosService: DeseosService ) { }

  ngOnInit() {
  }

}
