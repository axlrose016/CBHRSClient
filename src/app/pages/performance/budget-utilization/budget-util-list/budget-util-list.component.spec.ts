import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetUtilListComponent } from './budget-util-list.component';

describe('BudgetUtilListComponent', () => {
  let component: BudgetUtilListComponent;
  let fixture: ComponentFixture<BudgetUtilListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetUtilListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetUtilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
