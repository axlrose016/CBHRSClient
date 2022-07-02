import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDisciplineEntryComponent } from './employee-discipline-entry.component';

describe('EmployeeDisciplineEntryComponent', () => {
  let component: EmployeeDisciplineEntryComponent;
  let fixture: ComponentFixture<EmployeeDisciplineEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDisciplineEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDisciplineEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
