import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCompetencyDialogComponent } from './core-competency-dialog.component';

describe('CoreCompetencyDialogComponent', () => {
  let component: CoreCompetencyDialogComponent;
  let fixture: ComponentFixture<CoreCompetencyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreCompetencyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreCompetencyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
