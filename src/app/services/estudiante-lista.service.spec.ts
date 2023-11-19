import { TestBed } from '@angular/core/testing';

import { EstudianteListaService } from './estudiante-lista.service';

describe('EstudianteListaService', () => {
  let service: EstudianteListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudianteListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
