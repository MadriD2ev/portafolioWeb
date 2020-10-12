import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoscontactoComponent } from './datoscontacto.component';

describe('DatoscontactoComponent', () => {
  let component: DatoscontactoComponent;
  let fixture: ComponentFixture<DatoscontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatoscontactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoscontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
