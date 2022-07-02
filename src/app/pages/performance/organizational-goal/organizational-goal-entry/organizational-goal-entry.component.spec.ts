import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalGoalEntryComponent } from './organizational-goal-entry.component';

describe('OrganizationalGoalEntryComponent', () => {
  let component: OrganizationalGoalEntryComponent;
  let fixture: ComponentFixture<OrganizationalGoalEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalGoalEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalGoalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
