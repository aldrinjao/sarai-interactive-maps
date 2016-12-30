/* tslint:disable:no-unused-variable */

/*!
 * Window Object Service Test
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { TestBed, async, inject } from '@angular/core/testing';
import { WindowService } from './window.service';

describe('Service: Window', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WindowService
      ]
    });
  });

  it('should instantiate the service', inject([WindowService], (service: WindowService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an instance of window object', inject([WindowService], (service: WindowService) => {
    expect(service.getNativeWindow()).toBe(window);
  }));

});


