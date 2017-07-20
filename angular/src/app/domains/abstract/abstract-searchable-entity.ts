import { AbstractEntity } from './abstract-entity.model';
import { LoggableEntityInterface } from './loggable-entity-interface';
import { SearchableEntityInterface } from './searchable-entity-interface';

export abstract class AbstractSearchableEntity extends AbstractEntity implements SearchableEntityInterface, LoggableEntityInterface {

  /**
   * data attribute
   *
   * @type {any}
   */
  data?: any;

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

  /**
   * Reinicia as propriedades de uma collection em data.{endpoint}.collection
   */
  public resetDataCollection() {
    return {
      data: [],
      meta: {
        pagination: {
          total: 0,
          count: 0,
          per_page: 0,
          current_page: 0,
          total_pages: 0,
          links: {
            previous: '',
            next: ''
          }
        },
      }
    };
  }

  /**
   * Reinicia as propriedades de um item em data.{endpoint}.item
   */
  public resetDataItem() {
    return {
      data: {
        id: null,
        nome: null,
        ggrem: null,
        created_at: null,
        deleted_at: null,
        updated_at: null,
      },
      config: {
        showHistory: false
      },
    };
  }

}
