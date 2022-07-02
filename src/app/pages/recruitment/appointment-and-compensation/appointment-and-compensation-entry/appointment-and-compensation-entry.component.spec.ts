import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentAndCompensationEntryComponent } from './appointment-and-compensation-entry.component';

describe('AppointmentAndCompensationEntryComponent', () => {
  let component: AppointmentAndCompensationEntryComponent;
  let fixture: ComponentFixture<AppointmentAndCompensationEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentAndCompensationEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentAndCompensationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
