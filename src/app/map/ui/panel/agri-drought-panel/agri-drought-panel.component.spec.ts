import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriDroughtPanelComponent } from './agri-drought-panel.component';

describe('AgriDroughtPanelComponent', () => {
  let component: AgriDroughtPanelComponent;
  let fixture: ComponentFixture<AgriDroughtPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriDroughtPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriDroughtPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
