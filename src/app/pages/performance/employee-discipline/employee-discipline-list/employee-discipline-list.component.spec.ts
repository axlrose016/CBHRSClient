import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDisciplineListComponent } from './employee-discipline-list.component';

describe('EmployeeDisciplineListComponent', () => {
  let component: EmployeeDisciplineListComponent;
  let fixture: ComponentFixture<EmployeeDisciplineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDisciplineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDisciplineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
