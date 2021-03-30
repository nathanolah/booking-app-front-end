import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentByBarberComponent } from './appointment-by-barber.component';

describe('AppointmentByBarberComponent', () => {
  let component: AppointmentByBarberComponent;
  let fixture: ComponentFixture<AppointmentByBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentByBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentByBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
