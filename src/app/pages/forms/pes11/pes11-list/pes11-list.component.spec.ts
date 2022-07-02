import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pes11ListComponent } from './pes11-list.component';

describe('Pes11ListComponent', () => {
  let component: Pes11ListComponent;
  let fixture: ComponentFixture<Pes11ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pes11ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pes11ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
