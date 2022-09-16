import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenoComponent } from './seno.component';

describe('SenoComponent', () => {
  let component: SenoComponent;
  let fixture: ComponentFixture<SenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
