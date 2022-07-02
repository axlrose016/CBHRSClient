import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceApplicationPlanEntryComponent } from './workplace-application-plan-entry.component';

describe('WorkplaceApplicationPlanEntryComponent', () => {
  let component: WorkplaceApplicationPlanEntryComponent;
  let fixture: ComponentFixture<WorkplaceApplicationPlanEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkplaceApplicationPlanEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceApplicationPlanEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
