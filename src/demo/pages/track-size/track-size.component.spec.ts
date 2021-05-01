import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSizeComponent } from './track-size.component';

describe('TrackSizeComponent', () => {
  let component: TrackSizeComponent;
  let fixture: ComponentFixture<TrackSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
