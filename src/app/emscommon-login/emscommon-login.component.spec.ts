import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMSCommonLoginComponent } from './emscommon-login.component';

describe('EMSCommonLoginComponent', () => {
  let component: EMSCommonLoginComponent;
  let fixture: ComponentFixture<EMSCommonLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMSCommonLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMSCommonLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
