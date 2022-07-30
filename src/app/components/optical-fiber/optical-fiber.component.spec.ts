import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticalFiberComponent } from './optical-fiber.component';

describe('OpticalFiberComponent', () => {
  let component: OpticalFiberComponent;
  let fixture: ComponentFixture<OpticalFiberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpticalFiberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpticalFiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
