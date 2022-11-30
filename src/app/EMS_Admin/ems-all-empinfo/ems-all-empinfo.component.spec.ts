import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsAllEmpinfoComponent } from './ems-all-empinfo.component';

describe('EmsAllEmpinfoComponent', () => {
  let component: EmsAllEmpinfoComponent;
  let fixture: ComponentFixture<EmsAllEmpinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmsAllEmpinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmsAllEmpinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
