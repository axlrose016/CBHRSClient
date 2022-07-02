import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdnaEntryComponent } from './ldna-entry.component';

describe('LdnaEntryComponent', () => {
  let component: LdnaEntryComponent;
  let fixture: ComponentFixture<LdnaEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdnaEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdnaEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
