import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { MapConfig, MAP_CONFIG } from '../../../map.config';
import { AppConfig, APP_CONFIG } from '../../../../app.config';
import { TileLayerService } from '../../../shared';
import { LeafletMapService, LeafletModule } from '../../../../leaflet';
import { MapLayersReducer, SuitabilityLevelsReducer } from '../../../../store';
import { MockActivatedRoute, MockRouter } from '../../../../mocks/router';

import { AgriDroughtComponent } from './agri-drought.component';

describe('AgriDroughtComponent', () => {
  let component: AgriDroughtComponent;
  let fixture: ComponentFixture<AgriDroughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriDroughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriDroughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
