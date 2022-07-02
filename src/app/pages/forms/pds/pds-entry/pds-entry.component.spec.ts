import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdsEntryComponent } from './pds-entry.component';

describe('PdsEntryComponent', () => {
  let component: PdsEntryComponent;
  let fixture: ComponentFixture<PdsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
