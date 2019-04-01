/*!
 * Panel Module
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { TranslateModule } from '@ngx-translate/core';

import { MapUiFormsModule } from '../forms';

import { BasePanelComponent } from './base-panel/base-panel.component';
import { CropProductionAreaPanelComponent } from './crop-production-area-panel/crop-production-area-panel.component';
import { NdviPanelComponent } from './ndvi-panel/ndvi-panel.component';
import { EviPanelComponent } from './evi-panel/evi-panel.component';

import { RainfallMapPanelComponent } from './rainfall-map-panel/rainfall-map-panel.component';
import { SuitabilityMapPanelComponent } from './suitability-map-panel/suitability-map-panel.component';
import { AgriDroughtPanelComponent } from './agri-drought-panel/agri-drought-panel.component';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule,
    AccordionModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MapUiFormsModule,
  ],
  declarations: [
    BasePanelComponent,
    CropProductionAreaPanelComponent,
    NdviPanelComponent,
    EviPanelComponent,
    RainfallMapPanelComponent,
    SuitabilityMapPanelComponent,
    AgriDroughtPanelComponent
  ],
  exports: [
    BasePanelComponent,
    CropProductionAreaPanelComponent,
    NdviPanelComponent,
    EviPanelComponent,
    RainfallMapPanelComponent,
    SuitabilityMapPanelComponent,
    AgriDroughtPanelComponent
  ]
})
export class PanelModule { }


