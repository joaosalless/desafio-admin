import { Historico } from './historico.model';
import { AbstractSearchableEntity } from '../abstract/abstract-searchable-entity';

export class Medicamento extends AbstractSearchableEntity {

  /**
   * id attribute
   *
   * @type {number}
   */
  id?: any;

  /**
   * ggrem attribute
   *
   * @type {any}
   */
  ggrem?: any = null;

  /**
   * nome attribute
   *
   * @type {string}
   */
  nome?: any = null;

  /**
   * deleted_at attribute
   *
   * @type {any}
   */
  deleted_at?: any = null;

  /**
   * created_at attribute
   *
   * @type {any}
   */
  created_at?: any = null;

  /**
   * updated_at attribute
   *
   * @type {any}
   */
  updated_at?: any = null;

  /**
   * history attribute
   *
   * Histórico de alterações.
   * Só consta no resultado de uma consulta quando é solicitado via fractals transformer.
   *
   * @type {{data: Historico}}
   */
  history?: any = {
    data: new Historico(),
  };

  /**
   * Especifica o endpoint da API para esta Entidade
   */
  protected apiEndpoint: string = 'medicamentos';

  /**
   * Especifica as relações a serem incluidas na coleção pelo Fractals Transformer
   */
  protected collectionTransformers: any[] = [];

  /**
   * Especifica as relações a serem incluidas no item pelo Fractals Transformer
   */
  protected itemTransformers: any[] = ['history'];

  /**
   * Medicamento class constructor
   *
   * @param medicamento
   */
  constructor(medicamento?: Medicamento) {
    super();
    Object.assign(this, medicamento);
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
      },
      config: {
        crud: {
          redirect: {
            created: true,
            updated: true,
            deleted: false,
            force_deleted: true,
            restored: false,
          }
        }
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
        showHistory: false,
      },
    };
  }

}
