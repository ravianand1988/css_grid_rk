import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridShorthandsComponent } from './grid-shorthands.component';

describe('GridShorthandsComponent', () => {
  let component: GridShorthandsComponent;
  let fixture: ComponentFixture<GridShorthandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridShorthandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridShorthandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
