/*!
 * Agri Drought Module
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeafletModule } from '../../../leaflet';
import { AgriDroughtRoutingModule } from './agri-drought-routing.module';

import { AgriDroughtComponent } from './agri-drought/agri-drought.component';
import { InfoOverlayComponent } from './info-overlay/info-overlay.component';

@NgModule({
  imports: [
    CommonModule,
    LeafletModule,
    AgriDroughtRoutingModule
  ],
  declarations: [
    AgriDroughtComponent,
    InfoOverlayComponent,
  ],
  exports: [
    AgriDroughtComponent,
    InfoOverlayComponent
  ]
})
export class AgriDroughtModule { }


