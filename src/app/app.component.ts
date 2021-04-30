import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CSS grid demos';
  public navItems = [
    { title: 'Home', path: '/' },
    { title: 'Layout', path: 'layout' },
    { title: 'Grid Tracks', path: 'grid-tracks' },
  ];

  public currentUrl$ = this.router.events.pipe(
    filter(eve => (eve instanceof NavigationEnd)),
    map((eve: any) => eve.url),
  );

  constructor(
    private router: Router,
  ) { }
}
