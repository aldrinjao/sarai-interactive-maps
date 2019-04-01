/*!
 * Crop Production Area Maps Routing
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgriDroughtComponent } from './agri-drought/agri-drought.component';
import { InfoOverlayComponent } from './info-overlay/info-overlay.component';

const routes: Routes = [
  {
    path: '',
    component: AgriDroughtComponent
  },

  {
    path: ':drought',
    component: AgriDroughtComponent
  },
  {
    path: '',
    component: InfoOverlayComponent,
    outlet: 'info-overlay-control'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AgriDroughtRoutingModule { }


