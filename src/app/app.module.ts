import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';

import { LeafletTileProviderService } from './leaflet-tile-provider.service';
import { LeafletTileSelectorComponent } from './leaflet-tile-selector/leaflet-tile-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafletMapComponent,
    LeafletTileSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LeafletTileProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
