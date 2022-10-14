import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculo3Component } from './calculo3.component';

describe('Calculo3Component', () => {
  let component: Calculo3Component;
  let fixture: ComponentFixture<Calculo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
