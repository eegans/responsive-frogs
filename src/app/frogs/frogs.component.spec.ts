/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrogsComponent } from './frogs.component';

describe('FrogsComponent', () => {
  let component: FrogsComponent;
  let fixture: ComponentFixture<FrogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
