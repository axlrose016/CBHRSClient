import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceRatingEntryComponent } from './performance-rating-entry.component';

describe('PerformanceRatingEntryComponent', () => {
  let component: PerformanceRatingEntryComponent;
  let fixture: ComponentFixture<PerformanceRatingEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceRatingEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceRatingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
