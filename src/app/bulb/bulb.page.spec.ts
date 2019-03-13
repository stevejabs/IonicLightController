import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbPage } from './bulb.page';

describe('BulbPage', () => {
  let component: BulbPage;
  let fixture: ComponentFixture<BulbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
