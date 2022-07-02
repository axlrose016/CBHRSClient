import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RerouterComponent } from './rerouter.component';

describe('RerouterComponent', () => {
  let component: RerouterComponent;
  let fixture: ComponentFixture<RerouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RerouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RerouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
