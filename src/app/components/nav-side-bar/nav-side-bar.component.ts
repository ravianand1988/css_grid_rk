import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
  styleUrls: ['./nav-side-bar.component.scss']
})
export class NavSideBarComponent {

  public navItems = [
    { title: 'Home', path: '/' },
    { title: 'Layout', path: 'layout' },
    { title: 'Grid Tracks', path: 'grid-tracks' },
    { title: 'Grid Shorthands', path: 'grid-shorthands' },
    { title: 'Grid Flow', path: 'grid-flow' },
    { title: 'Track size', path: 'track-size' },
    { title: 'Products', path: 'products' },
  ];

  public currentUrl$ = this.router.events.pipe(
    filter(eve => (eve instanceof NavigationEnd)),
    map((eve: any) => eve.url),
  );

  constructor(
    private router: Router,
  ) { }
}
