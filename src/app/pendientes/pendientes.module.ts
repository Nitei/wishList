import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PendientesPage } from './pendientes.page';
import { SharedModule } from '../shared/shared.module';
// import { FiltroCompletadoPipe } from '../pipes/filtro-completado.pipe';

const routes: Routes = [
  {
    path: '',
    component: PendientesPage
  }
];

@NgModule( {
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild( routes )
  ],
  declarations: [ PendientesPage ]
} )
export class PendientesPageModule { }
