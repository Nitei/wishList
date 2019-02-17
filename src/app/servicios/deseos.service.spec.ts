import { TestBed } from '@angular/core/testing';

import { DeseosService } from './deseos.service';
import { Lista } from 'src/models';



const service: DeseosService = TestBed.get( DeseosService );
describe( 'DeseosService', () => {

  beforeEach( function () {
    TestBed.configureTestingModule( {} );
    service.listas = [ new Lista( 'Compras de invierno' ) ];
  } );


  it( 'newListInListas("Compras de invierno") or newListInListas( "" ) should return false', () => {

    expect( service.newListInListas( 'Compras de invierno' ) ).toBeFalsy();
    expect( service.newListInListas( '' ) ).toBeFalsy();
    console.log( service.listas );
  } );

  it( 'newListInListas("Compras a lo loco") should return false', () => {

    expect( service.newListInListas( 'Compras a lo loco' ) ).toBeTruthy();
    console.log( service.listas );
  } );
} );
