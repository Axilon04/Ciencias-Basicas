import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicLinealComponent } from './graphic-lineal.component';

describe('GraphicLinealComponent', () => {
  let component: GraphicLinealComponent;
  let fixture: ComponentFixture<GraphicLinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicLinealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicLinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
