import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdnaListComponent } from './ldna-list.component';

describe('LdnaListComponent', () => {
  let component: LdnaListComponent;
  let fixture: ComponentFixture<LdnaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdnaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdnaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
