import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPerformanceEvaluatonEntryComponent } from './work-performance-evaluaton-entry.component';

describe('WorkPerformanceEvaluatonEntryComponent', () => {
  let component: WorkPerformanceEvaluatonEntryComponent;
  let fixture: ComponentFixture<WorkPerformanceEvaluatonEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPerformanceEvaluatonEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPerformanceEvaluatonEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
