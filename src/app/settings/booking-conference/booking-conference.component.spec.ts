import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingConferenceComponent } from './booking-conference.component';

describe('BookingConferenceComponent', () => {
  let component: BookingConferenceComponent;
  let fixture: ComponentFixture<BookingConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingConferenceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
