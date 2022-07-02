import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdsListComponent } from './pds-list.component';

describe('PdsListComponent', () => {
  let component: PdsListComponent;
  let fixture: ComponentFixture<PdsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
