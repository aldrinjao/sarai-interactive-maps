/*!
 * Crop Production Area Maps Component
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { Component, Inject, OnInit, OnDestroy, QueryList, ViewChildren , ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { LayerState, Layer } from '../../../../store';
import { TileLayerService } from '../../../shared';
import { LeafletWmsLayerComponent, LeafletMapService } from '../../../../leaflet';
import { APP_CONFIG } from '../../../../app.config';
import { MAP_CONFIG } from '../../../map.config';
import * as L from 'leaflet';
import map from 'lodash-es/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-agri-drought',
  templateUrl: './agri-drought.component.html',
  styleUrls: ['./agri-drought.component.sass']
})
export class AgriDroughtComponent implements OnInit, OnDestroy {
  public crop: string;
  public layersCollection: Observable<Array<Layer>>;
  private _pageTitle = 'Agricultural Drought';
  private _wmsTileUrl: string;
  private _map: L.Map;
  private _mapLayers: Observable<any>;
  private urlparam: string;

  constructor(
    @Inject(MAP_CONFIG) private _mapConfig: any,
    @Inject(APP_CONFIG) private _globalConfig: any,
    private _mapService: LeafletMapService,
    private _tileLayerService: TileLayerService,
    private _route: ActivatedRoute,
    private _title: Title,
    private _store: Store<any>,
    public toastr: ToastsManager,
    vcr: ViewContainerRef

  ) {
    const resolvedConfig = this._mapConfig.svtr_maps;

    // set default wms tile layer
    this._wmsTileUrl = this._tileLayerService.getGeoServerWMSTileLayerBaseUrl(resolvedConfig.wms.workspace, resolvedConfig.wms.tiled);

    // get the map state store from the store
    this._mapLayers = this._store.select('mapLayers');
    this.toastr.setRootViewContainerRef(vcr);
  }
  showSuccess() {
    this.toastr.success('Fetching map layer', 'Please Wait');
  }




  ngOnInit() {
    let text;
    this._route.params.forEach((params: Params) => {
      if (typeof params['month'] !== 'undefined') {
        // set the crop property
        this.urlparam = params['month'];

        switch (this.urlparam) {
          case 'july':
            text = 'Jul2020';
            break;
          case 'august':
            text = 'Aug2020';
            break;
          case 'september':
            text = 'Sep2020';
            break;
          case 'october':
            text = 'Oct2020';
            break;
          case 'november':
            text = 'Nov2020';
            break;
          case 'december':
            text = 'Dec2020';
            break;
          default:
            text = 'Jul2020';
        }

        this.processLayers(text);
      }

    });


    this.layersCollection = this._mapLayers
      .debounceTime(300)
      .map((layerState: LayerState) => {
        return map(layerState.layers, (layer: Layer) => {
          return layer;
        });
      })
      ;

      // set the page title
      this._title.setTitle(`${this._pageTitle} | ${this._globalConfig.app_title}`);

  }

  // edit agridrought panel, add months, then use suitability maps as pattern for adding urls, use months instead of crops

  processLayers(layer: string) {
    // this.crop = 'dcaf_nov18_sq';
    this.crop = layer;
    // this.crop = 'may2019';
    const layers = this._tileLayerService.getSVTRLayers(this.crop);

    // assemble the layers payload for saving to the application store.
    const processedLayers = map(layers, (layer: L.WMSOptions) => {
      const payload: Layer = {
        id: layer.layers,
        type: 'agri-drought',
        url: this._wmsTileUrl,
        layerOptions: layer
      };
      this.showSuccess();
      return payload;
    });


    // remove all layers present on the map
    this.removeLayers();

    // add the new layer to the store
    this._store.dispatch({
      type: 'ADD_LAYERS',
      payload: processedLayers
    });
  }

  removeLayers() {
    // remove all layers published on the store
    this._store.dispatch({
      type: 'REMOVE_ALL_LAYERS'
    });
  }

  ngOnDestroy() {
    // reset the page title
    this._title.setTitle(`${this._globalConfig.app_title}`);

    // remove all layers published on the store and on the collection
    this.removeLayers();
  }

}


