import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectofinalhdComponent } from './proyectofinalhd.component';

describe('ProyectofinalhdComponent', () => {
  let component: ProyectofinalhdComponent;
  let fixture: ComponentFixture<ProyectofinalhdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectofinalhdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectofinalhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
