import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesListadoComponent } from './estudiantes-listado.component';

describe('EstudiantesListadoComponent', () => {
  let component: EstudiantesListadoComponent;
  let fixture: ComponentFixture<EstudiantesListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudiantesListadoComponent]
    });
    fixture = TestBed.createComponent(EstudiantesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
