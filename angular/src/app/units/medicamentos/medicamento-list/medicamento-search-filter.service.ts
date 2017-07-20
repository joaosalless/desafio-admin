import { Injectable } from '@angular/core';
import { SearchableEntityFilterService } from '../../../shared/services/data/searchable-entity-filter.service';

@Injectable()
export class MedicamentoSearchFilterService extends SearchableEntityFilterService {

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
