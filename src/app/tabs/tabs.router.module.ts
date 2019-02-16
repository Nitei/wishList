import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pendientes',
        children: [
          {
            path: '',
            loadChildren: '../pendientes/pendientes.module#PendientesPageModule'
          }
        ]
      },
      {
        path: 'terminados',
        children: [
          {
            path: ':titulo/:lista',
            loadChildren: '../terminados/terminados.module#TerminadosPageModule'
          },
          {
            path: '',
            loadChildren: '../terminados/terminados.module#TerminadosPageModule'
          }
        ]
      },
      {
        path: 'agregar',
        children: [
          {
            path: ':titulo',
            loadChildren: '../agregar/agregar.module#AgregarPageModule'
          },
          {
            path: ':titulo/:lista',
            loadChildren: '../agregar/agregar.module#AgregarPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/pendientes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pendientes',
    pathMatch: 'full'
  }
];

@NgModule( {
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ RouterModule ]
} )
export class TabsPageRoutingModule { }
