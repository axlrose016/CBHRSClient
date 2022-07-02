import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobClassificationListComponent } from './job-classification-list.component';

describe('JobClassificationListComponent', () => {
  let component: JobClassificationListComponent;
  let fixture: ComponentFixture<JobClassificationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobClassificationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobClassificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
