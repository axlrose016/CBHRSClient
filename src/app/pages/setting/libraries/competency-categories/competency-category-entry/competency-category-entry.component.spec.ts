import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyCategoryEntryComponent } from './competency-category-entry.component';

describe('CompetencyCategoryEntryComponent', () => {
  let component: CompetencyCategoryEntryComponent;
  let fixture: ComponentFixture<CompetencyCategoryEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyCategoryEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyCategoryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
