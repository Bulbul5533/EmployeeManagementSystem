import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMSDialogComponent } from './ems-dialog.component';

describe('EMSDialogComponent', () => {
  let component: EMSDialogComponent;
  let fixture: ComponentFixture<EMSDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMSDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMSDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
