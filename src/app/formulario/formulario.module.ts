import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPageRoutingModule } from './formulario-routing.module';

import { FormularioPage } from './formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPageRoutingModule,
     /* 
    Data Driven - Segunda forma de trabalhar formulario
    ReactiveFormsModule - fornece as ferramenas (formgroup, formbuilder) 
     */
    ReactiveFormsModule
  ],
  declarations: [FormularioPage]
})
export class FormularioPageModule {}
