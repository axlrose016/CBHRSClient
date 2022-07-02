import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeProfileListComponent } from './office-profile-list.component';

describe('OfficeProfileListComponent', () => {
  let component: OfficeProfileListComponent;
  let fixture: ComponentFixture<OfficeProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
