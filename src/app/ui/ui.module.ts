/*!
 * UI Module
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from './charts';
import { ModalModule } from './modal';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    ModalModule.forRoot()
  ],
  exports: [
    ChartsModule,
    ModalModule
  ],
  declarations: [LoaderComponent]
})
export class UiModule { }


