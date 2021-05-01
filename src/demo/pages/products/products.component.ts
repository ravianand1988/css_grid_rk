import { Component, OnInit } from '@angular/core';

import { range } from 'lodash-es';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [
    './products-common.component.scss',
    './products.component.scss',
    // './products-responsive.component.scss',
  ]
})
export class ProductsComponent implements OnInit {
  public products = [
    { name: 'Vanilla', price: '1.25', imgUrl: 'icecream-vanilla.jpg' },
    { name: 'Chocolate', price: '2.0', imgUrl: 'icecream-chocolate.jpg' },
    { name: 'Strawberry', price: '1.75', imgUrl: 'icecream-strawberry.jpg' },
  ];

  public iceCreams = range(1, 13);
  constructor() { }

  ngOnInit(): void {
  }
}
