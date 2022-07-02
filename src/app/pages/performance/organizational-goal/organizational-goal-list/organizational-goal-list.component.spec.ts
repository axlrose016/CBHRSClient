import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalGoalListComponent } from './organizational-goal-list.component';

describe('OrganizationalGoalListComponent', () => {
  let component: OrganizationalGoalListComponent;
  let fixture: ComponentFixture<OrganizationalGoalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalGoalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalGoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
