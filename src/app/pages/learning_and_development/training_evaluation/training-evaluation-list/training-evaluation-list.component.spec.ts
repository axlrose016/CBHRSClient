import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingEvaluationListComponent } from './training-evaluation-list.component';

describe('TrainingEvaluationListComponent', () => {
  let component: TrainingEvaluationListComponent;
  let fixture: ComponentFixture<TrainingEvaluationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingEvaluationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingEvaluationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
