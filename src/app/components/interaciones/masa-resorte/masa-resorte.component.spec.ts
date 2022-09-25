import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasaResorteComponent } from './masa-resorte.component';

describe('MasaResorteComponent', () => {
  let component: MasaResorteComponent;
  let fixture: ComponentFixture<MasaResorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasaResorteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasaResorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
