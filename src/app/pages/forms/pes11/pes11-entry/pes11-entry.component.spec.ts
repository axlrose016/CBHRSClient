import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pes11EntryComponent } from './pes11-entry.component';

describe('Pes11EntryComponent', () => {
  let component: Pes11EntryComponent;
  let fixture: ComponentFixture<Pes11EntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pes11EntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pes11EntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
