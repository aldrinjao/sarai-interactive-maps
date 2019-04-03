/*!
 * NDVI Maps Module
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';


import { TutorialComponent } from './tutorial/tutorial.component';
import { InfoOverlayComponent } from './info-overlay/info-overlay.component';



@NgModule({
  imports: [
    CommonModule,
    TutorialRoutingModule

  ],
  declarations: [
    TutorialComponent,
    InfoOverlayComponent
  ],
  providers: [
  ],
  exports: [
    TutorialComponent,
    InfoOverlayComponent
  ]
})
export class TutorialModule { }


