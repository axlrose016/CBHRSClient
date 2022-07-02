import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonlistDialogComponent } from './personlist-dialog.component';

describe('PersonlistDialogComponent', () => {
  let component: PersonlistDialogComponent;
  let fixture: ComponentFixture<PersonlistDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonlistDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonlistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
