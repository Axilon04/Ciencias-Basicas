import { Injectable } from '@angular/core';
import { CalcularService } from '../services/calcular.service';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(
    private calcularServices: CalcularService
  ) { }

  

}
