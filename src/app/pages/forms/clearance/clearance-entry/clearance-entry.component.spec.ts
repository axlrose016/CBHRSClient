import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearanceEntryComponent } from './clearance-entry.component';

describe('ClearanceEntryComponent', () => {
  let component: ClearanceEntryComponent;
  let fixture: ComponentFixture<ClearanceEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearanceEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearanceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
