/*!
 * NDVI Maps Module
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EviMapsRoutingModule } from './evi-maps-routing.module';

import { EviMapService } from './evi-map.service';
import { LoaderService} from '../../../ui/loader/loader.service';

import { EviMapsComponent } from './evi-maps/evi-maps.component';
import { InfoOverlayComponent } from './info-overlay/info-overlay.component';



@NgModule({
  imports: [
    CommonModule,
    EviMapsRoutingModule

  ],
  declarations: [
    EviMapsComponent,
    InfoOverlayComponent
  ],
  providers: [
    EviMapService,
    LoaderService
  ],
  exports: [
    EviMapsComponent,
    InfoOverlayComponent
  ]
})
export class EviMapsModule { }


