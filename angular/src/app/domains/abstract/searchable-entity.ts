import { AbstractEntity } from './abstract-entity.model';
import { LoggableEntityInterface } from './loggable-entity-interface';
import { SearchableEntityInterface } from './searchable-entity-interface';

export abstract class SearchableEntity extends AbstractEntity implements SearchableEntityInterface, LoggableEntityInterface {

  /**
   * history attribute
   *
   * @type {any}
   */
  history?: any;

  /**
   * Especifica os campos editaveis da Entidade
   */
  protected fillable?: any[];

  /**
   * Especifica o endpoint da API para esta Entidade
   */
  protected apiEndpoint: any = null;

  /**
   * Especifica as relações a serem incluidas na coleção pelo Fractals Transformer
   */
  protected collectionTransformers: any[] = [];

  /**
   * Especifica as relações a serem incluidas no item pelo Fractals Transformer
   */
  protected itemTransformers: any[] = [];

  /**
   * Especifica as relações a serem incluidas na coleção pelo Fractals Transformer
   */
  getCollectionTransformers(): any[] {
    return this.collectionTransformers;
  }

  /**
   * Especifica as relações a serem incluidas no item pelo Fractals Transformer
   */
  getItemTransformers(): any[] {
    return this.itemTransformers;
  }

  resetDataItem() {
    throw new Error("Method not implemented.");
  }

  resetDataCollection() {
    throw new Error("Method not implemented.");
  }

  /**
   * Retorna o Histórico de alterações
   *
   * Só consta no resultado de uma consulta quando é solicitado via fractals transformer.
   *
   * @type {any}
   */
  getHistory(): any {
    return this.history;
  }

  /**
   * Retorna os campos editaveis da Entidade
   */
  getFillable(): any[] {
    return this.fillable;
  }

  /**
   * Retorna o endpoint da API para esta Entidade
   */
  getApiEndpoint(): string {
    return this.apiEndpoint;
  }

}
