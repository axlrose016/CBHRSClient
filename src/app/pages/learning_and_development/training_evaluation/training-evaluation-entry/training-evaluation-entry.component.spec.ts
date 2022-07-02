import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingEvaluationEntryComponent } from './training-evaluation-entry.component';

describe('TrainingEvaluationEntryComponent', () => {
  let component: TrainingEvaluationEntryComponent;
  let fixture: ComponentFixture<TrainingEvaluationEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingEvaluationEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingEvaluationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
