import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetUtilEntryComponent } from './budget-util-entry.component';

describe('BudgetUtilEntryComponent', () => {
  let component: BudgetUtilEntryComponent;
  let fixture: ComponentFixture<BudgetUtilEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetUtilEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetUtilEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
