import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsListComponent } from './complaints-list.component';

describe('ComplaintsListComponent', () => {
  let component: ComplaintsListComponent;
  let fixture: ComponentFixture<ComplaintsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
