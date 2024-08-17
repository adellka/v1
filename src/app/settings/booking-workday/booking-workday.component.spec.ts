import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingWorkdayComponent } from './booking-workday.component';

describe('BookingWorkdayComponent', () => {
  let component: BookingWorkdayComponent;
  let fixture: ComponentFixture<BookingWorkdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingWorkdayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingWorkdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
