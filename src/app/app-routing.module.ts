import { LayoutComponent } from './../demo/pages/layout/layout.component';
import { GridTracksComponent } from './../demo/pages/grid-tracks/grid-tracks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'grid-tracks',
    component: GridTracksComponent,
  },
  {
    path: 'layout',
    component: LayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
