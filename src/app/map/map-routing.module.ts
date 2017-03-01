/*!
 * Map Routing
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuitabilityMapsComponent } from './suitability-maps/suitability-maps.component';
import { CropProductionAreaMapsComponent } from './crop-production-area-maps/crop-production-area-maps.component';
import { NdviMapsComponent } from './ndvi-maps/ndvi-maps.component';
import { RainfallMapsComponent } from './rainfall-maps/rainfall-maps.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'suitability-maps',
        component: SuitabilityMapsComponent
      },

      // duplicated for required url parameter `crop`
      {
        path: 'suitability-maps/:crop',
        component: SuitabilityMapsComponent
      },

      {
        path: 'crop-production-area',
        component: CropProductionAreaMapsComponent
      },

      // duplicated for required url parameter `crop`
      {
        path: 'crop-production-area/:crop',
        component: CropProductionAreaMapsComponent
      },

      // TODO: add date validation. for now we do nothing if invalid date is provided
      // duplicated for required url parameters `startDate` and `endDate`
      {
        path: 'ndvi/:startDate/:endDate',
        component: NdviMapsComponent
      },

      // TODO: add date validation. for now we do nothing if invalid date is provided
      // duplicated for required url parameter `startDate` and `endDate`
      {
        path: 'rainfall-maps/:startDate/:endDate',
        component: RainfallMapsComponent
      },
    ]
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MapRoutingModule { }


