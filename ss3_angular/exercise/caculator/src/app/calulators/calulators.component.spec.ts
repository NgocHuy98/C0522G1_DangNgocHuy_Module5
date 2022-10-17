import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalulatorsComponent } from './calulators.component';

describe('CalulatorsComponent', () => {
  let component: CalulatorsComponent;
  let fixture: ComponentFixture<CalulatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalulatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalulatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
