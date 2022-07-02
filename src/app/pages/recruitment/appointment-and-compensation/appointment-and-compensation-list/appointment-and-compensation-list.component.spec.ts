import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentAndCompensationListComponent } from './appointment-and-compensation-list.component';

describe('AppointmentAndCompensationListComponent', () => {
  let component: AppointmentAndCompensationListComponent;
  let fixture: ComponentFixture<AppointmentAndCompensationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentAndCompensationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentAndCompensationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
