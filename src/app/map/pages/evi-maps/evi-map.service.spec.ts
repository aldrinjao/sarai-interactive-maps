/* tslint:disable:no-unused-variable */

/*!
 * Evi Map Service Test
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, RequestMethod, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { MapConfig, MAP_CONFIG } from '../../map.config';
import { EviMapService } from './evi-map.service';

describe('Service: EviMap', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,

        { provide: MAP_CONFIG, useValue: MapConfig },
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          }
        },

        EviMapService
      ]
    });
  });

  it('should instantiate the service', inject([EviMapService], (service: EviMapService) => {
    expect(service).toBeTruthy();
  }));

  it('should get time series data', async(inject([MockBackend, EviMapService], (backend: MockBackend, service: EviMapService) => {
    const dataToSend = {
      data: [{
        date: 'Feb 18, 2000',
        value: 8902
      }],
      success: true
    };

    backend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({
        body: JSON.stringify(dataToSend)
      });

      connection.mockRespond(new Response(options));

      expect(connection.request.method).toEqual(RequestMethod.Get);
      expect(connection.request.headers.get('Content-Type')).toEqual('application/json');
    });

    service
      .getEviTimeSeriesByLatLng({
        lat: 17.06400534417392,
        lng: 121.67495727539062
      }, '2015-10-31', '2016-10-31')
      .subscribe((data) => {
        expect(data.success).toBe(true);
      })
      ;
  })));

});


