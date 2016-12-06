/*!
 * Map Module
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { TooltipModule, AccordionModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TranslateModule } from 'ng2-translate';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { LeafletModule } from '../leaflet';

import { WindowService } from './window.service';
import { TileLayerService } from './tile-layer.service';
import { SuitabilityMapService } from './suitability-map.service';
import { LocationsService } from './locations.service';
import { MapConfig, MAP_CONFIG } from './map.config';

import { HomeComponent } from './home/home.component';
import { SuitabilityMapsComponent } from './suitability-maps/suitability-maps.component';
import { SuitabilityMapPanelComponent } from './suitability-map-panel/suitability-map-panel.component';
import { CropProductionAreaPanelComponent } from './crop-production-area-panel/crop-production-area-panel.component';
import { NdviPanelComponent } from './ndvi-panel/ndvi-panel.component';
import { RainfallMapPanelComponent } from './rainfall-map-panel/rainfall-map-panel.component';
import { DownloadImageFormComponent } from './download-image-form/download-image-form.component';
import { NdviMapsComponent } from './ndvi-maps/ndvi-maps.component';
import { RainfallMapsComponent } from './rainfall-maps/rainfall-maps.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    AccordionModule,
    ModalModule,
    MdCheckboxModule,
    TranslateModule,
    LeafletModule
  ],
  declarations: [
    HomeComponent,
    SuitabilityMapsComponent,
    SuitabilityMapPanelComponent,
    CropProductionAreaPanelComponent,
    NdviPanelComponent,
    RainfallMapPanelComponent,
    DownloadImageFormComponent,
    NdviMapsComponent,
    RainfallMapsComponent,
    PdfViewerComponent
  ],
  providers: [
    TileLayerService,
    SuitabilityMapService,
    LocationsService,
    WindowService,

    { provide: MAP_CONFIG, useValue: MapConfig }
  ],
  exports: [
    HomeComponent,
    SuitabilityMapsComponent,
    SuitabilityMapPanelComponent,
    CropProductionAreaPanelComponent,
    NdviPanelComponent,
    RainfallMapPanelComponent,
    DownloadImageFormComponent,
    NdviMapsComponent,
    RainfallMapsComponent
  ]
})
export class MapModule { }


