import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeogebraFuncionVectorialComponent } from './geogebra-funcion-vectorial.component';

describe('GeogebraFuncionVectorialComponent', () => {
  let component: GeogebraFuncionVectorialComponent;
  let fixture: ComponentFixture<GeogebraFuncionVectorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeogebraFuncionVectorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeogebraFuncionVectorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
