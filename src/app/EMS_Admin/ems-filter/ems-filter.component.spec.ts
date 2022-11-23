import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMSFilterComponent } from './ems-filter.component';

describe('EMSFilterComponent', () => {
  let component: EMSFilterComponent;
  let fixture: ComponentFixture<EMSFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMSFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMSFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
