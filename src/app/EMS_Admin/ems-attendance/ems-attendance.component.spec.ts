import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsAttendanceComponent } from './ems-attendance.component';

describe('EmsAttendanceComponent', () => {
  let component: EmsAttendanceComponent;
  let fixture: ComponentFixture<EmsAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmsAttendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmsAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
