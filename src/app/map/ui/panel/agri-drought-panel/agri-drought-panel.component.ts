/*!
 * Crop Production Area Panel Component
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { basePanelAnimation, BasePanelComponent } from '../base-panel/base-panel.component';
import { LeafletMapService } from '../../../../leaflet';
import { CropProductionAreaMapService } from '../../../shared';

@Component({
  selector: 'app-agri-drought-panel',
  templateUrl: './agri-drought-panel.component.html',
  styleUrls: ['./agri-drought-panel.component.sass'],
  animations: [
    basePanelAnimation()
  ]
})
export class AgriDroughtPanelComponent extends BasePanelComponent implements OnInit {
  public controlWrapperAnimationState = 'hidden';
  public cropData: Observable<any>;

  constructor(
    private _store: Store<any>,
    private _router: Router,
    private _childRenderer: Renderer,
    private _childMapService: LeafletMapService,
    private _cropProductionAreaMapService: CropProductionAreaMapService
  ) {
    // call the parent constructor
    super(_childRenderer, _childMapService);
  }

  ngOnInit() {
    // call the parent's ngOnInit lifecycle hook
    super.ngOnInit();

    this.cropData = this._cropProductionAreaMapService.getCrops();

    // add the panel to the store
    this._store.dispatch({
      type: 'ADD_PANEL',
      payload: 'agri-drought'
    });
  }

  togglePanelVisibility(immediate = false) {
    super.togglePanelVisibility(immediate);

    if (
      (this.controlWrapperAnimationState === 'visible' || this.controlWrapperAnimationState === 'visible-immediate') &&
      !this._router.isActive('/agri-drought', false)
    ) {
      this._router.navigateByUrl('/agri-drought');
    }

    // if (
    //   (this.controlWrapperAnimationState === 'hidden' || this.controlWrapperAnimationState === 'hidden-immediate') &&
    //   this._router.isActive('/crop-production-area', false)
    // ) {
    //   this._router.navigateByUrl('/');
    // }
  }
  isMapActive(): boolean {
    return this._router.isActive(`/agri-drought`, false);
  }


  onHideButtonClick(evt: Event) {
    // call the parent method
    super.onHideButtonClick(evt);
  }

}


