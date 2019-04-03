/*!
 * Pages Routing
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'suitability-maps',
        loadChildren: './suitability-maps/suitability-maps.module#SuitabilityMapsModule'
      },

       {
         path: 'crop-production-area',
         loadChildren: './crop-production-area-maps/crop-production-area-maps.module#CropProductionAreaMapsModule'
       },

      // duplicated for required url parameters `startDate` and `endDate`
      {
        path: 'ndvi',
        loadChildren: './ndvi-maps/ndvi-maps.module#NdviMapsModule'
      },

      // duplicated for required url parameter `startDate` and `endDate`
      {
        path: 'rainfall-maps',
        loadChildren: './rainfall-maps/rainfall-maps.module#RainfallMapsModule'
      },
      {
        path: 'agri-drought',
        loadChildren: './agri-drought/agri-drought.module#AgriDroughtModule'
      },
      {
        path: 'evi',
        loadChildren: './evi-maps/evi-maps.module#EviMapsModule'
      },
      {
        path: 'tutorial',
        loadChildren: './tutorial/tutorial.module#TutorialModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PagesRoutingModule { }


