import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WapListComponent } from './wap-list.component';

describe('WapListComponent', () => {
  let component: WapListComponent;
  let fixture: ComponentFixture<WapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
