import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsEntryComponent } from './complaints-entry.component';

describe('ComplaintsEntryComponent', () => {
  let component: ComplaintsEntryComponent;
  let fixture: ComponentFixture<ComplaintsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
