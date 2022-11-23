import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMSDepartmentsComponent } from './ems-departments.component';

describe('EMSDepartmentsComponent', () => {
  let component: EMSDepartmentsComponent;
  let fixture: ComponentFixture<EMSDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMSDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMSDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
