import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  GridFlowComponent,
  GridShorthandsComponent,
  ProductsComponent,
  TrackSizeComponent,
} from 'src/demo/pages';

import {
  GridTracksComponent,
} from './../demo/pages/grid-tracks/grid-tracks.component';
import { LayoutComponent } from './../demo/pages/layout/layout.component';

const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
  },
  {
    path: 'grid-tracks',
    component: GridTracksComponent,
  },
  {
    path: 'grid-shorthands',
    component: GridShorthandsComponent,
  },
  {
    path: 'grid-flow',
    component: GridFlowComponent,
  },
  {
    path: 'track-size',
    component: TrackSizeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
