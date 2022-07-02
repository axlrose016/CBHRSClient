import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCompetencyListComponent } from './core-competency-list.component';

describe('CoreCompetencyListComponent', () => {
  let component: CoreCompetencyListComponent;
  let fixture: ComponentFixture<CoreCompetencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreCompetencyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreCompetencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
