import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEntryComponent } from './department-entry.component';

describe('DepartmentEntryComponent', () => {
  let component: DepartmentEntryComponent;
  let fixture: ComponentFixture<DepartmentEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
