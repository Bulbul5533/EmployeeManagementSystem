import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMSDashboardComponent } from './ems-dashboard.component';

describe('EMSDashboardComponent', () => {
  let component: EMSDashboardComponent;
  let fixture: ComponentFixture<EMSDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMSDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMSDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
