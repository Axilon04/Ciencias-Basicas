import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagencialComponent } from './tagencial.component';

describe('TagencialComponent', () => {
  let component: TagencialComponent;
  let fixture: ComponentFixture<TagencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagencialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
