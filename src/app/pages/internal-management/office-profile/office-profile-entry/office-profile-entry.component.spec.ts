import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeProfileEntryComponent } from './office-profile-entry.component';

describe('OfficeProfileEntryComponent', () => {
  let component: OfficeProfileEntryComponent;
  let fixture: ComponentFixture<OfficeProfileEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeProfileEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeProfileEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
