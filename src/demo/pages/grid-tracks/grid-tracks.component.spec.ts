/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridTracksComponent } from './grid-tracks.component';

describe('GridTracksComponent', () => {
  let component: GridTracksComponent;
  let fixture: ComponentFixture<GridTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
