import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTeamComponent } from './booking-team.component';

describe('BookingTeamComponent', () => {
  let component: BookingTeamComponent;
  let fixture: ComponentFixture<BookingTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingTeamComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
