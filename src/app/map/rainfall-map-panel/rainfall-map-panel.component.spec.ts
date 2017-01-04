/* tslint:disable:no-unused-variable */

/*!
 * Rainfall Map Panel Component Test
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { Renderer } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormsModule as SaraiInteractiveMapsFormsModule, FlatpickrComponent } from '../../forms';
import { LeafletMapService } from '../../leaflet';
import { MockRouter } from '../../mocks/router';
import { RainfallMapPanelComponent } from './rainfall-map-panel.component';

describe('Component: RainfallMapPanel', () => {
  let mockRouter: MockRouter;

  beforeEach(() => {
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      imports: [
        SaraiInteractiveMapsFormsModule
      ],
      providers: [
        FormBuilder,
        Renderer,
        LeafletMapService,
        RainfallMapPanelComponent,
        { provide: Router, useValue: mockRouter }
      ]
    });
  });

  it('should create an instance', inject([RainfallMapPanelComponent], (component: RainfallMapPanelComponent) => {
    expect(component).toBeTruthy();
  }));

});


