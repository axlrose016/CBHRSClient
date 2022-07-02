import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrStaffingPlanEntryComponent } from './hr-staffing-plan-entry.component';

describe('HrStaffingPlanEntryComponent', () => {
  let component: HrStaffingPlanEntryComponent;
  let fixture: ComponentFixture<HrStaffingPlanEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrStaffingPlanEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrStaffingPlanEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
