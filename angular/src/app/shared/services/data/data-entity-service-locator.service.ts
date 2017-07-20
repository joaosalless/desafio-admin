import { Injectable } from '@angular/core';
import { Medicamento } from '../../../domains/medicamentos/medicamento.model';

@Injectable()
export class DataEntityServiceLocatorService {

  private entities: any = {
    'medicamentos': new Medicamento(),
  };

  constructor() { }

  /**
   * Retorna a instância da Entidade Solicitada
   *
   * @param entity
   * @return {any}
   */
  getInstance(entity: string) {
    return this.entities[entity];
  }

}
