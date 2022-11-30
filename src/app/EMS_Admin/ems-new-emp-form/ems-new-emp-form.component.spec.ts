import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsNewEmpFormComponent } from './ems-new-emp-form.component';

describe('EmsNewEmpFormComponent', () => {
  let component: EmsNewEmpFormComponent;
  let fixture: ComponentFixture<EmsNewEmpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmsNewEmpFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmsNewEmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
