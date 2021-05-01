import { Component } from '@angular/core';

import { range } from 'lodash-es';

@Component({
  selector: 'app-grid-shorthands',
  templateUrl: './grid-shorthands.component.html',
  styleUrls: ['./grid-shorthands.component.scss']
})
export class GridShorthandsComponent {
  public gridItems = range(1, 13);

  constructor() {
  }

}
