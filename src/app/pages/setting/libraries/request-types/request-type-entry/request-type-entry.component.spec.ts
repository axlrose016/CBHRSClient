import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeEntryComponent } from './request-type-entry.component';

describe('RequestTypeEntryComponent', () => {
  let component: RequestTypeEntryComponent;
  let fixture: ComponentFixture<RequestTypeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTypeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
