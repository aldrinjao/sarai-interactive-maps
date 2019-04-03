/*!
 * Crop Production Area Maps Component
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { Component, Inject} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Layer } from '../../../../store';
import { APP_CONFIG } from '../../../../app.config';
import { MAP_CONFIG } from '../../../map.config';
import * as L from 'leaflet';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.sass']
})
export class TutorialComponent {


  constructor(
    @Inject(MAP_CONFIG) private _mapConfig: any,
    @Inject(APP_CONFIG) private _globalConfig: any,

  ) {

  }




}


