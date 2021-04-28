import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridTracksComponent, LayoutComponent } from './pages';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridTracksComponent,
    LayoutComponent,
  ],
  exports: [
    GridTracksComponent,
    LayoutComponent
  ]
})
export class DemoModule { }
