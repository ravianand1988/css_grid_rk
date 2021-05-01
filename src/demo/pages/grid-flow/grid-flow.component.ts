import { Component } from '@angular/core';

import { range } from 'lodash-es';

@Component({
  selector: 'app-grid-flow',
  templateUrl: './grid-flow.component.html',
  styleUrls: ['./grid-flow.component.scss']
})
export class GridFlowComponent {
  public gridItems = range(1, 12);
  // public gridItems = range(1, 8);
  // public gridItems = range(1, 23);
}
