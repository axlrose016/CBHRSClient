import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceApplicationPlanListComponent } from './workplace-application-plan-list.component';

describe('WorkplaceApplicationPlanListComponent', () => {
  let component: WorkplaceApplicationPlanListComponent;
  let fixture: ComponentFixture<WorkplaceApplicationPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkplaceApplicationPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceApplicationPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
