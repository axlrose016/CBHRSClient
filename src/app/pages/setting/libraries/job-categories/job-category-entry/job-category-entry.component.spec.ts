import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCategoryEntryComponent } from './job-category-entry.component';

describe('JobCategoryEntryComponent', () => {
  let component: JobCategoryEntryComponent;
  let fixture: ComponentFixture<JobCategoryEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCategoryEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCategoryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
