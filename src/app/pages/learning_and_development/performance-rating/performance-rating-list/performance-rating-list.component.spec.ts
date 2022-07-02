import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceRatingListComponent } from './performance-rating-list.component';

describe('PerformanceRatingListComponent', () => {
  let component: PerformanceRatingListComponent;
  let fixture: ComponentFixture<PerformanceRatingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceRatingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceRatingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
