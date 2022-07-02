import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobClassificationComponent } from './job-classification.component';

describe('JobClassificationComponent', () => {
  let component: JobClassificationComponent;
  let fixture: ComponentFixture<JobClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
