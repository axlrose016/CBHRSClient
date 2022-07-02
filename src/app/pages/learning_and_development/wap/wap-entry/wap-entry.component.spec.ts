import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WapEntryComponent } from './wap-entry.component';

describe('WapEntryComponent', () => {
  let component: WapEntryComponent;
  let fixture: ComponentFixture<WapEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WapEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WapEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
