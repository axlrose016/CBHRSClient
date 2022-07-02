import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningAndEvaluationEntryComponent } from './learning-and-evaluation-entry.component';

describe('LearningAndEvaluationEntryComponent', () => {
  let component: LearningAndEvaluationEntryComponent;
  let fixture: ComponentFixture<LearningAndEvaluationEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningAndEvaluationEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningAndEvaluationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
