import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeogebraRectaEnLaCurvaComponent } from './geogebra-recta-en-la-curva.component';

describe('GeogebraRectaEnLaCurvaComponent', () => {
  let component: GeogebraRectaEnLaCurvaComponent;
  let fixture: ComponentFixture<GeogebraRectaEnLaCurvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeogebraRectaEnLaCurvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeogebraRectaEnLaCurvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
