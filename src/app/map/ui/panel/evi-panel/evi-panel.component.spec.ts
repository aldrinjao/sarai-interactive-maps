/* tslint:disable:no-unused-variable */

/*!
 * EVI Panel Component Test
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { Renderer } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { LeafletMapService } from '../../../../leaflet';
import { PanelsReducer } from '../../../../store';
import { MockRouter } from '../../../../mocks/router';
import { EviPanelComponent } from './evi-panel.component';

describe('Component: EviPanel', () => {
  let mockRouter: MockRouter;

  beforeEach(() => {
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      providers: [
        Renderer,
        LeafletMapService,
        EviPanelComponent,
        { provide: Router, useValue: mockRouter },
        provideStore({
          panels: PanelsReducer
        })
      ]
    });
  });

  it('should create an instance', inject([EviPanelComponent], (component: EviPanelComponent) => {
    expect(component).toBeTruthy();
  }));

});


