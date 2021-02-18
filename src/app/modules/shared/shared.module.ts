import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { OnlyNumberDirective } from './directives/onlynumber.directive';
import { OnlyOperatorDirective } from './directives/only-operator.directive'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OnlyNumberDirective, 
    OnlyOperatorDirective],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    FlexModule,
    OnlyNumberDirective,
    OnlyOperatorDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
