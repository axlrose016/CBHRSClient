import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrStaffingPlanListComponent } from './hr-staffing-plan-list.component';

describe('HrStaffingPlanListComponent', () => {
  let component: HrStaffingPlanListComponent;
  let fixture: ComponentFixture<HrStaffingPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrStaffingPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrStaffingPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
