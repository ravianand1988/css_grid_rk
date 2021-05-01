import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFlowComponent } from './grid-flow.component';

describe('GridFlowComponent', () => {
  let component: GridFlowComponent;
  let fixture: ComponentFixture<GridFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
