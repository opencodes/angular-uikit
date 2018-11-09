import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUikitComponent } from './ng-uikit.component';

describe('NgUikitComponent', () => {
  let component: NgUikitComponent;
  let fixture: ComponentFixture<NgUikitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgUikitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUikitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
