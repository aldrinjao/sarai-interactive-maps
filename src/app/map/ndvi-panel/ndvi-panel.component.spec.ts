/* tslint:disable:no-unused-variable */

/*!
 * NDVI Panel Component Test
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { Renderer } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, RequestMethod, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LeafletMapService } from '../../leaflet';
import { LocationsService } from '../locations.service';
import { MockRouter } from '../../mocks/router';
import { NdviPanelComponent } from './ndvi-panel.component';
import { MapConfig, MAP_CONFIG } from '../map.config';

describe('Component: NdviPanel', () => {
  let mockRouter: MockRouter;

  beforeEach(() => {
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        FormBuilder,
        Renderer,
        LeafletMapService,
        NdviPanelComponent,
        LocationsService,

        { provide: Router, useValue: mockRouter },
        { provide: MAP_CONFIG, useValue: MapConfig },
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          }
        },
      ]
    });
  });

  it('should create an instance', inject([NdviPanelComponent], (component: NdviPanelComponent) => {
    expect(component).toBeTruthy();
  }));

});


