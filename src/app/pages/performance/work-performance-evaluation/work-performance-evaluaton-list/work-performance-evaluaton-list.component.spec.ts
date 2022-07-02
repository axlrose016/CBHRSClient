import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPerformanceEvaluatonListComponent } from './work-performance-evaluaton-list.component';

describe('WorkPerformanceEvaluatonListComponent', () => {
  let component: WorkPerformanceEvaluatonListComponent;
  let fixture: ComponentFixture<WorkPerformanceEvaluatonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPerformanceEvaluatonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPerformanceEvaluatonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
