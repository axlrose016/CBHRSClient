import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyCategoryDialogComponent } from './competency-category-dialog.component';

describe('CompetencyCategoryDialogComponent', () => {
  let component: CompetencyCategoryDialogComponent;
  let fixture: ComponentFixture<CompetencyCategoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyCategoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
