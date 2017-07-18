import { Injectable } from '@angular/core';
import { ConfigService } from '@ngx-config/core';
import { HttpService } from '../http/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { isNullOrUndefined } from 'util';

import { MetaService } from '../meta.service';
import { Page } from '../../../domains/pages/page.model';
import { LoggerService } from '../logger/logger.service';
import { QueryBuilder } from '../../../domains/abstract/query-builder';
import { Medicamento } from '../../../domains/medicamentos/medicamento.model';
import { SearchableEntity } from '../../../domains/abstract/searchable-entity';
import { PreloaderService } from '../../components/preloader/preloader.service';
import { MedicamentoSearchFilterService } from '../../../units/medicamentos/medicamento-list/medicamento-search-filter.service';
import { NotificationService } from '../../components/notification/notification.service';
import { SearchableEntityInterface } from '../../../domains/abstract/searchable-entity-interface';
import { LoggableEntityInterface } from '../../../domains/abstract/loggable-entity-interface';
import { Activity } from '../../../domains/activities/activity.model';

@Injectable()
export class DataService {

  public data: any = {
    page: new Page(),
    medicamentos: {
      entity: new Medicamento(),
      item: new Medicamento().resetDataItem(),
      collection: new Medicamento().resetDataCollection(),
    },
    notifications: {},
    config: {},
    endpoint: '',
    queryBuilder: {},
    searchTerm: new Subject<string>(),
    searchParams: new URLSearchParams(),
  };

  /**
   * DataService Constructor
   *
   * @param configService
   * @param searchFilter
   * @param preloaderService
   * @param logger
   * @param notificationService
   * @param metaService
   * @param httpService
   * @param route
   * @param router
   */
  constructor(public readonly configService: ConfigService,
              public searchFilter: MedicamentoSearchFilterService,
              public preloaderService: PreloaderService,
              public logger: LoggerService,
              public notificationService: NotificationService,
              public metaService: MetaService,
              protected httpService: HttpService,
              protected route: ActivatedRoute,
              protected router: Router) {
    this.data.page = new Page({
      title: this.configService.getSettings('system.app.name')
    })
  }

  /**
   * Recupera configuração a partir da chave informada
   *
   * @param key
   * @return {any}
   */
  getData(key: any): any {
    return this.data[key];
  }

  /**
   * Configura a página
   *
   * @param page
   * @return {DataService}
   */
  setPage(page: Page) {
    this.data.page = page;
    this.metaService.setMetaFromPage(this.data.page);
    return this;
  }

  /**
   * Prepara a API
   *
   * @param endpoint
   * @return {DataService}
   */
  startApi(endpoint: string) {
    this.data.endpoint = endpoint;
    return this;
  }

  setQueryBuilder(queryBuilder?: QueryBuilder) {
    this.data.queryBuilder = queryBuilder;
    return this;
  }

  /**
   * Debuga a propriedade data no console
   */
  debug() {
    // console.clear();
    this.logger.debug({
      data: this.data,
    });
  }

  /**
   * Atualiza o filtro de busca de acordo com os parâmetros recebidos da URL.
   */
  setSearchParams() {
    for (let param of this.searchFilter.getFields()) {
      this.setFilterParamByQueryParam(param);
      this.data.searchParams.set(param, this.searchFilter[param].toString());
    }
    return this;
  }

  /**
   * Cria os parâmetros de busca na url de requisição enviada para a API
   *
   * @param queryParam
   */
  setFilterParamByQueryParam(queryParam: string) {
    let searchParams = this.route.snapshot.queryParams;
    if (isNullOrUndefined(this.searchFilter[queryParam])) {
      if (!isNullOrUndefined(searchParams[queryParam])) {
        this.searchFilter[queryParam] = searchParams[queryParam];
      }
    }
  }

  /**
   * Ações executadas ao mudar os filtros da busca
   *
   * @param $event
   */
  onFilterChange($event) {
    this.data.searchTerm.next($event.target.value);
    this.doSearch();
  }

  /**
   * Executa a busca
   */
  doSearch(terms?: Observable<any>) {
    this.setSearchParams();
    Object.assign(this.data.queryBuilder, {
      endpoint: `${this.data.medicamentos.entity.getApiEndpoint()}`,
    });
    this.search(this.data.searchTerm)
      .subscribe(res => {
        this.getCollection();
      });
  }

  /**
   * Executa a busca 400 milisegundos após o usuário parar de digitar
   *
   * @param terms
   * @return {Observable<R>}
   */
  search(terms: Observable<any>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .do(() => {
      });
  }

  /**
   * Alterna entre registros ativos e excluidos
   *
   * @param trashed
   */
  toggleTrashed(trashed: boolean) {
    this.searchFilter['onlyTrashed'] = trashed;
    this.getCollection();
  }

  /**
   * Alterna entre os layouts ['list', 'card' ]
   */
  toggleLayout() {
    this.searchFilter.layout = (this.searchFilter.layout === 'list' ? 'cards' : 'list');
    this.doSearch();
  }

  /**
   * Exibe o total de registros nas abas Ativos e Deletados
   *
   * @return {boolean}
   */
  showCountActive() {
    let total = this.getData(this.data.endpoint).collection.data.length;
    return (this.searchFilter['onlyTrashed'] !== true && total > 0);
  }

  /**
   * Exibe e oculta o histórico de modificações do Medicamento
   */
  toggleHistory() {
    return this.data.showHistory != this.data.showHistory;
  }

  /**
   * Navega para a rota informada
   *
   * @param route: Array
   */
  navigateToRoute(route: any[]) {
    this.router.navigate(route);
  }

  /**
   * Retorna data.endpoint
   *
   * @return {string}
   */
  getEndPoint(): any {
    return this.data.endpoint;
  }

  /**
   * Instancia uma Entidade
   *
   * @param endpoint
   */
  getEntity(endpoint?: string): SearchableEntity {
    return this.getData(this.getEndPoint()).entity;
  }

  /**
   * Reinicia as propriedades de uma collection em data.{collection}
   */
  private resetDataCollection() {
    this.getData(this.getEndPoint()).collection = this.getEntity().resetDataCollection();
    return this;
  }

  /**
   * Reinicia as propriedades de um item em data.{item}
   */
  private resetDataItem() {
    this.getData(this.getEndPoint()).item = this.getEntity().resetDataItem();
    return this;
  }

  /**
   * Prepara a propriedade data.queryBuilder para requisição de uma Coleção
   */
  private prepareCollectionQuery() {
    Object.assign(this.data.queryBuilder, {
      include: this.getData(this.getEndPoint()).entity.getCollectionTransformers()
    });
    return this;
  }

  /**
   * Retorna um QueryBuilder para requisição de um Item
   */
  getItemQueryBuilder(): QueryBuilder {
    return new QueryBuilder({
      endpoint: this.getEndPoint(),
      include: this.getData(this.getEndPoint()).entity.getItemTransformers()
    });
  }

  /**
   * Retorna um QueryBuilder para requisição de uma Coleção
   */
  getCollectionQueryBuilder(): QueryBuilder {
    return new QueryBuilder({
      endpoint: this.getEndPoint(),
      include: this.getData(this.getEndPoint()).entity.getCollectionTransformers()
    });
  }

  /**
   * Solicita a lista de registros à API
   */
  getCollection() {
    this.resetDataCollection();
    this.prepareCollectionQuery();
    this.setSearchParams();
    this.httpService
      .init(this.getCollectionQueryBuilder())
      .list(this.data.searchParams)
      .then((res) => {
        Object.assign(this.getData(this.data.endpoint).collection, res);
        this.debug();
      })
      .catch((error) => this.logger.error(error));
  }

  /**
   * Solicita um registro específico à API
   *
   * @param id: any
   */
  getItem(id: any) {
    this.resetDataItem();
    this.httpService
      .init(this.getItemQueryBuilder())
      .show(id)
      .then((res) => {
        Object.assign(this.getData(this.data.endpoint).item, res);
        this.debug();
      })
      .catch((error) => this.logger.debug(error));
  }

  /**
   * Salva registro na API
   */
  saveItem() {
    this.httpService
      .init(this.getItemQueryBuilder())
      .post(this.getData(this.data.endpoint).item.data)
      .then((res) => {
        this.getCollection();
        Object.assign(this.getData(this.data.endpoint).item, res);
        this.debug();
      })
      .catch((error) => this.logger.debug(error));
  }

  /**
   * Atualiza um registro específico na API
   *
   * @param id
   * @param item: any
   */
  updateItem(id: any, item: any) {
    this.httpService
      .init(this.getItemQueryBuilder())
      .update(id, item)
      .then((res) => {
        this.resetDataItem();
        this.getCollection();
        Object.assign(this.getData(this.data.endpoint).item, res);
        this.debug();
      })
      .catch((error) => this.logger.debug(error));
  }

  /**
   * Deleta um registro específico na API
   *
   * @param id: any
   */
  removeItem(id: any) {
    this.httpService
      .init(this.getItemQueryBuilder())
      .remove(id)
      .then((res) => {
        this.resetDataItem();
        this.getCollection();
        this.notificationService.showSuccess(res.message);
        this.debug();
      })
      .catch((error) => this.logger.debug(error));
  }

  /**
   * Restaura um registro específico na API
   *
   * @param id: any
   */
  restoreItem(id: any) {
    this.httpService
      .init(this.getItemQueryBuilder())
      .restore(id)
      .then((res) => {
        this.getItem(id);
        this.getCollection();
        this.notificationService.showSuccess(res.message);
        this.debug();
      })
      .catch((error) => this.logger.debug(error));
  }

  /**
   * Deleta um registro específico permanentemente na API
   *
   * @param id: any
   */
  forceRemoveItem(id: any) {
    this.httpService
      .init(this.getItemQueryBuilder())
      .forceRemove(id)
      .then((res) => {
        this.resetDataItem();
        this.getCollection();
        this.notificationService.showError(res.message);
        this.debug();
      })
      .catch((error) => this.logger.debug(error));
  }

}
