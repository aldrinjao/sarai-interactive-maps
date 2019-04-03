/*!
 * NDVI Maps Routing
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoOverlayComponent } from './info-overlay/info-overlay.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialComponent
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
export class TutorialRoutingModule { }


