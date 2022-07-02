import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLevelEntryComponent } from './user-level-entry.component';

describe('UserLevelEntryComponent', () => {
  let component: UserLevelEntryComponent;
  let fixture: ComponentFixture<UserLevelEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLevelEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLevelEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
