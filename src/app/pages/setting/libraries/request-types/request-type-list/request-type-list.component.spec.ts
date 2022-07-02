import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeListComponent } from './request-type-list.component';

describe('RequestTypeListComponent', () => {
  let component: RequestTypeListComponent;
  let fixture: ComponentFixture<RequestTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
