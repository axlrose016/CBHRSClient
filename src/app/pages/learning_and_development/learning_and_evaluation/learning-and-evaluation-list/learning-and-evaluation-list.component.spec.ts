import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningAndEvaluationListComponent } from './learning-and-evaluation-list.component';

describe('LearningAndEvaluationListComponent', () => {
  let component: LearningAndEvaluationListComponent;
  let fixture: ComponentFixture<LearningAndEvaluationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningAndEvaluationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningAndEvaluationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
