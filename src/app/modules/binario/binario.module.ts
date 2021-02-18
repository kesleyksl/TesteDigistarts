import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinarioRoutingModule } from './binario-routing.module';
import { BinarioComponent } from './pages/binario/binario.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BinarioComponent, CalculadoraComponent],
  imports: [
    CommonModule,
    BinarioRoutingModule,
    SharedModule
  ]
})
export class BinarioModule { }
