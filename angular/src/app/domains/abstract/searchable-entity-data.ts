import { SearchableEntityDataInterface } from './searchable-entity-data-interface';

export class SearchableEntityData implements SearchableEntityDataInterface {

  /**
   * Reinicia as propriedades de uma collection em data.{endpoint}.collection
   */
  public defaultDataCollection() {
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
      api: {},
      config: {
        redirectOnSave: true,
      }
    };
  }

  /**
   * Reinicia as propriedades de um item em data.{endpoint}.item
   */
  public defaultDataItem() {
    return {
      data: [],
      config: {
        showHistory: false,
      },
    };
  }
}
