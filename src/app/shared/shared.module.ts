import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FiltroCompletadoPipe } from './pipes/filtro-completado.pipe';

@NgModule( {
  declarations: [
    HeaderComponent,
    FiltroCompletadoPipe
  ],
  entryComponents: [
    HeaderComponent
  ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports: [ HeaderComponent, FiltroCompletadoPipe ]
} )
export class SharedModule { }
