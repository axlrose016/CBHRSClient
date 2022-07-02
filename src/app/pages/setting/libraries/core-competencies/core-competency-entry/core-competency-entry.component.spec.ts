import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCompetencyEntryComponent } from './core-competency-entry.component';

describe('CoreCompetencyEntryComponent', () => {
  let component: CoreCompetencyEntryComponent;
  let fixture: ComponentFixture<CoreCompetencyEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreCompetencyEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreCompetencyEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
