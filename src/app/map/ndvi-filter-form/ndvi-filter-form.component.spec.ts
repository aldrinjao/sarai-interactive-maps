/* tslint:disable:no-unused-variable */

/*!
 * NDVI Filter Form Component Test
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletMapService } from '../../leaflet';
import { LocationsService } from '../locations.service';
import { MockRouter } from '../../mocks/router';
import { MockLocationsService } from '../../mocks/map';
import { NdviFilterFormComponent } from './ndvi-filter-form.component';

describe('Component: NdviFilterForm', () => {
  let component: NdviFilterFormComponent;
  let fixture: ComponentFixture<NdviFilterFormComponent>;
  let mockRouter: MockRouter;

  // elements
  let startingDate: DebugElement;
  let startingDateEl: HTMLInputElement;
  let scanRange: DebugElement;
  let scanRangeEl: HTMLInputElement;
  let provinceSelect: DebugElement;
  let provinceSelectEl: HTMLElement;

  beforeEach(async(() => {
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      declarations: [
        NdviFilterFormComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        LeafletMapService,

        { provide: Router, useValue: mockRouter },
        { provide: LocationsService, useClass: MockLocationsService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdviFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // get the starting date and helper element
    startingDate = fixture.debugElement.query(By.css('#ec_starting_date_sel'));
    startingDateEl = startingDate.nativeElement;

    // get the scan range element
    scanRange = fixture.debugElement.query(By.css('#ec_scan_range_txt'));
    scanRangeEl = scanRange.nativeElement;

    // get the province selector
    provinceSelect = fixture.debugElement.query(By.css('#ec_province_filter_sel'));
    provinceSelectEl = provinceSelect.nativeElement;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should show that date is required', async(() => {
    startingDateEl.focus();
    startingDateEl.blur();

    // detect changes in the fixture
    fixture.detectChanges();

    setTimeout(() => {
      let helpBlockEl = startingDateEl.parentElement.querySelector('.help-block-wrapper');

      expect(helpBlockEl.children.length).toBe(1);
      expect(helpBlockEl.children[0].textContent.trim()).toBe('Starting Date is required.');
    }, 0);
  }));

  it('should show that date is invalid', async(() => {
    // gain focus of the element
    startingDateEl.focus();

    startingDateEl.value = '2016-1-10';

    // dispatch input event
    startingDateEl.dispatchEvent(new Event('input'));

    // remove the focus from the event
    startingDateEl.blur();

    // detect changes in the fixture
    fixture.detectChanges();

    setTimeout(() => {
      let helpBlockEl = startingDateEl.parentElement.querySelector('.help-block-wrapper');

      expect(helpBlockEl.children.length).toBe(1);
      expect(helpBlockEl.children[0].textContent.trim()).toBe('Starting Date must be in YYYY-MM-DD format.');
    }, 0);
  }));

  it('should not show any error messages for date', async(() => {
    // gain focus of the element
    startingDateEl.focus();

    startingDateEl.value = '2016-11-10';

    // dispatch input event
    startingDateEl.dispatchEvent(new Event('input'));

    // remove the focus from the event
    startingDateEl.blur();

    // detect changes in the fixture
    fixture.detectChanges();

    setTimeout(() => {
      let helpBlockEl = startingDateEl.parentElement.querySelector('.help-block-wrapper');

      expect(helpBlockEl.children.length).toBe(0);
    }, 0);
  }));

  it('should show that scan range is required', async(() => {
    scanRangeEl.focus();
    scanRangeEl.blur();

    // detect changes in the fixture
    fixture.detectChanges();

    setTimeout(() => {
      let helpBlockEl = scanRangeEl.parentElement.querySelector('.help-block-wrapper');

      expect(helpBlockEl.children.length).toBe(1);
      expect(helpBlockEl.children[0].textContent.trim()).toBe('Scan Range is required.');
    }, 0);
  }));

  it('should show that scan range is invalid', async(() => {
    // gain focus of the element
    scanRangeEl.focus();

    scanRangeEl.value = '10a';

    // dispatch input event
    scanRangeEl.dispatchEvent(new Event('input'));

    // remove the focus from the event
    scanRangeEl.blur();

    // detect changes in the fixture
    fixture.detectChanges();

    setTimeout(() => {
      let helpBlockEl = scanRangeEl.parentElement.querySelector('.help-block-wrapper');

      expect(helpBlockEl.children.length).toBe(1);
      expect(helpBlockEl.children[0].textContent.trim()).toBe('Scan Range must be a number.');
    }, 0);
  }));

  it('should not show any error messages for scan range', async(() => {
    // gain focus of the element
    scanRangeEl.focus();

    scanRangeEl.value = '10';

    // dispatch input event
    scanRangeEl.dispatchEvent(new Event('input'));

    // remove the focus from the event
    scanRangeEl.blur();

    // detect changes in the fixture
    fixture.detectChanges();

    setTimeout(() => {
      let helpBlockEl = scanRangeEl.parentElement.querySelector('.help-block-wrapper');

      expect(helpBlockEl.children.length).toBe(0);
    }, 0);
  }));

  it('should contain at least one province', async(() => {
    fixture
      .whenStable()
      .then(() => {
        expect(provinceSelectEl.querySelectorAll('option').length).toBeGreaterThanOrEqual(2);
      })
      ;
  }));

});

