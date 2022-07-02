import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobClassificationEntryComponent } from './job-classification-entry.component';

describe('JobClassificationEntryComponent', () => {
  let component: JobClassificationEntryComponent;
  let fixture: ComponentFixture<JobClassificationEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobClassificationEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobClassificationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
