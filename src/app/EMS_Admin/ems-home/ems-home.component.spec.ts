import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMSHomeComponent } from './ems-home.component';

describe('EMSHomeComponent', () => {
  let component: EMSHomeComponent;
  let fixture: ComponentFixture<EMSHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMSHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMSHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
