import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteracionesComponent } from './interaciones.component';

describe('InteracionesComponent', () => {
  let component: InteracionesComponent;
  let fixture: ComponentFixture<InteracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteracionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
