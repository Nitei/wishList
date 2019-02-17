import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PendientesPage } from './pendientes.page';
import { IonicModule } from '@ionic/angular';
import { routes } from '../tabs/tabs.router.module';
import { TabsPageModule } from '../tabs/tabs.module';
import { DeseosService } from '../servicios/deseos.service';


describe( 'PendientesPage', () => {
  let component: PendientesPage;
  let fixture: ComponentFixture<PendientesPage>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ PendientesPage ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        IonicModule,
        TabsPageModule,
        RouterTestingModule.withRoutes( routes ),
      ],

    } );
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( PendientesPage );
    component = fixture.componentInstance;
    fixture.detectChanges();

  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
