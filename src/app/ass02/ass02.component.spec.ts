import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass02Component } from './ass02.component';

describe('Ass02Component', () => {
  let component: Ass02Component;
  let fixture: ComponentFixture<Ass02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ass02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
