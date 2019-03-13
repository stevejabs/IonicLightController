import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsPage } from './lights.page';

describe('LightsPage', () => {
  let component: LightsPage;
  let fixture: ComponentFixture<LightsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
