import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyCategoryListComponent } from './competency-category-list.component';

describe('CompetencyCategoryListComponent', () => {
  let component: CompetencyCategoryListComponent;
  let fixture: ComponentFixture<CompetencyCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
