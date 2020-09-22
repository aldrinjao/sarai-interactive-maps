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


  maps = [

    {
      'name': 'july',
      'slug': 'july',
      'url': 'Jul2020'
    },
    {
      'name': 'august',
      'slug': 'august',
      'url': 'Aug2020'
    },
    {
      'name': 'september',
      'slug': 'september',
      'url': 'Sep2020'
    },
    {
      'name': 'october',
      'slug': 'october',
      'url': 'Oct2020'
    },
    {
      'name': 'november',
      'slug': 'november',
      'url': 'Nov2020'
    },
    {
      'name': 'december',
      'slug': 'december',
      'url': 'Dec2020'
    },


  ];


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
  }
  isMapActive(): boolean {
    return this._router.isActive(`/agri-drought`, false);
  }


  onHideButtonClick(evt: Event) {
    // call the parent method
    super.onHideButtonClick(evt);
  }

  isMonthActive(month: string, ): boolean {
    return this._router.isActive(`/agri-drought/${month}`, true);
  }

  redirect(event, month: string) {

    // redirect to the URL
    this._router.navigateByUrl(`/agri-drought/${month}`);
  }



}


