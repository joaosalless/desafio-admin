import { Historico } from './historico.model';
import { Pagination } from '../../shared/components/pagination/pagination';
import { SearchableEntity } from '../abstract/searchable-entity';

export class Medicamento extends SearchableEntity {

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
   * Reinicia as propriedades de uma collection em data.{endpoint}.collection
   */
  public resetDataCollection() {
    return {
      data: [],
      meta: {
        pagination: new Pagination(),
      },
      api: {}
    };
  }

  /**
   * Reinicia as propriedades de um item em data.{endpoint}.item
   */
  public resetDataItem() {
    return {
      data: [],
      showHistory: false,
      api: {}
    };
  }

}
