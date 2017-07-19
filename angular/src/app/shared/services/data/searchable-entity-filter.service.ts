import { Injectable } from '@angular/core';
import { SearchableEntityFilterInterface } from './searchable-entity-filter-interface';

@Injectable()
export class SearchableEntityFilterService implements SearchableEntityFilterInterface {

  public search = '';
  public include: any = '';
  public onlyTrashed = false;
  public orderBy: any = 'created_at';
  public sortedBy: any = 'desc';
  public layout: any = 'list';

  public getFields() {
    return [
      'search',
      'include',
      'onlyTrashed',
      'orderBy',
      'sortedBy',
      'layout',
    ];
  }

  public reset() {
    return Object.assign(this, {
      search: '',
      include: '',
      onlyTrashed: false,
      orderBy: 'created_at',
      sortedBy: 'desc',
      layout: 'list',
    })
  }

}
