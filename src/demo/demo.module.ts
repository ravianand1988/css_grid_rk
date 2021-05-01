import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  GridFlowComponent,
  GridShorthandsComponent,
  GridTracksComponent,
  LayoutComponent,
  ProductsComponent,
  TrackSizeComponent,
} from './pages';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridTracksComponent,
    LayoutComponent,
    GridShorthandsComponent,
    ProductsComponent,
    GridFlowComponent,
    TrackSizeComponent,
  ],
})
export class DemoModule { }
