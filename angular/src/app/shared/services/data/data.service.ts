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
import { SearchableEntity } from '../../../domains/abstract/searchable-entity';
import { PreloaderService } from '../../components/preloader/preloader.service';
import { NotificationService } from '../../components/notification/notification.service';
import { SearchableEntityDataInterface } from '../../../domains/abstract/searchable-entity-data-interface';
import { SearchableEntityFilterService } from './searchable-entity-filter.service';
import { DataEntityServiceLocatorService } from './data-entity-service-locator.service';
import { ApiResponseInterface } from '../http/api-response-interface';

@Injectable()
export class DataService {

  /**
   * Configurações globais
   */
  public readonly config: any = {};

  /**
   * Dados globais
   */
  public data: any = {
    page: new Page(),
    endpoint: '',
    queryBuilder: {},
    searchTerm: new Subject<string>(),
    searchParams: new URLSearchParams(),
  };

  /**
   * Resposta da API
   *
   * @type {{}}
   */
  private apiResponse: any = {};

  /**
   * DataService Constructor
   *
   * Serviço de Configurações globais
   * @param configService
   *
   * Serviço de Localização de Entidades
   * @param entityServiceLocator
   *
   * Serviço de Filtro de pesquisa
   * @param searchFilter
   *
   * Serviço de Preload
   * @param preloader
   *
   * Serviço de Log
   * @param logger
   *
   * Serviço de notificações
   * @param notificationService
   *
   * Serviço de SEO Meta
   * @param metaService
   *
   * Serviço da API
   * @param apiService
   *
   * Serviço de rota ativa
   * @param route
   *
   * Serviço de navegação
   * @param router
   */
  constructor(public readonly configService: ConfigService,
              public readonly apiService: HttpService,
              private entityServiceLocator: DataEntityServiceLocatorService,
              public searchFilter: SearchableEntityFilterService,
              public preloader: PreloaderService,
              public logger: LoggerService,
              public notificationService: NotificationService,
              public metaService: MetaService,
              public route: ActivatedRoute,
              public router: Router) {
    Object.assign(this.config, this.configService.getSettings());
  }

  /**
   * Prepara a API de acordo com o endpoint informado
   *
   * @param endpoint
   * @return {DataService}
   */
  startApi(endpoint: string,) {
    this.setEndPoint(endpoint)
      .resetDataItem();
    return this;
  }

  /**
   * Configura data.endpoint
   *
   * Exemplo caso seja informado o endpoint 'medicamentos':
   *
   * Será instanciada a entidade Medicamento;
   * A partir da entidade instanciada será criada a seguinte configuração:
   *
   * data: {
   *   medicamentos: {
   *     entity: new Medicamento(),
   *     item: {
   *       data: {
   *         ...
   *         history: {
   *           ...
   *         }
   *       }
   *     },
   *     collection: {
   *       data: [item]
   *     },
   * @return {string}
   */
  setEndPoint(endpoint): any {
    Object.assign(this.data, {
      endpoint: endpoint,
      [endpoint]: {
        entity: this.entityServiceLocator.getInstance(endpoint),
        item: this.entityServiceLocator.getInstance(endpoint).resetDataCollection(),
        collection: this.entityServiceLocator.getInstance(endpoint).resetDataCollection(),
      }
    });
    return this;
  }

  /**
   * Retorna data.endpoint
   *
   * @return {string}
   */
  getEndPoint(): any {
    return this.data.endpoint;
  }

  getPreload(): any {
    return this.preloader;
  }

  /**
   * Configura os parâmetros da requisição
   *
   * @param queryBuilder
   * @return {DataService}
   */
  setQueryBuilder(queryBuilder?: QueryBuilder) {
    this.data.queryBuilder = queryBuilder;
    return this;
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
   * Retorna os dados da página
   * @return {Page}
   */
  getPage() {
    return this.data.page;
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
   * Debuga a propriedade data no console
   */
  debug() {
    // console.clear();
    this.logger.debug({
      data: this.data,
      config: this.config,
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
      endpoint: `${this.data[this.getEndPoint()].entity.getApiEndpoint()}`,
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
   * @param event
   */
  toggleTrashed(trashed: boolean, event?: any) {
    if (event) {
      event.preventDefault();
    }
    this.searchFilter['onlyTrashed'] = trashed;
    this.getCollection();
  }

  /**
   * Alterna entre registros ativos e excluidos baseando-se se a collection está vazia
   */
  private toggleTrashedByCollectionDataLength() {
    let condition = (this.getCollectionData().length === 1);
    if (condition) {
      this.toggleTrashed(!this.searchFilter['onlyTrashed']);
    }
  }

  /**
   * Alterna entre os layouts ['list', 'card' ]
   */
  toggleLayout() {
    this.searchFilter.layout = (this.searchFilter.layout === 'list' ? 'cards' : 'list');
    this.doSearch();
  }

  /**
   * Exibe e oculta o histórico de modificações do item
   */
  toggleHistoryShowHistory() {
    Object.assign(this.data[this.getEndPoint()].item.config, {
      showHistory: !this.data[this.getEndPoint()].item.config.showHistory,
    });
  }

  /**
   * Exibe o total de registros nas abas Ativos e Deletados
   *
   * @return {boolean}
   */
  showCountActive() {
    let total = this.data[this.getEndPoint()].collection.data.length;
    return (this.searchFilter['onlyTrashed'] !== true && total > 0);
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
   * Instancia uma Entidade
   *
   * @param endpoint
   */
  getEntity(endpoint?: string): SearchableEntity {
    return this.data[this.getEndPoint()].entity;
  }

  /**
   * Retorna os dados da coleção atual
   */
  getCollectionData(): any {
    return this.data[this.getEndPoint()].collection.data;
  }

  /**
   * Retorna configurações da coleção atual
   */
  getCollectionConfig(): any {
    return this.configService.getSettings(`collections.${this.getEndPoint()}`);
  }

  /**
   * Retorna os dados do item atual
   */
  getItemData(): any {
    return this.data[this.getEndPoint()].item.data;
  }

  /**
   * Modifica os dados do item atual
   */
  setItemData(data): any {
    return this.data[this.getEndPoint()].item.data = data;
  }

  /**
   * Verifica se existe erros de validação do campo
   */
  getItemHasErrors(field?: any): boolean {
    if (!field) {
      return !isNullOrUndefined(this.data[this.getEndPoint()].item.errors);
    }
    if (!isNullOrUndefined(this.data[this.getEndPoint()].item.errors)) {
      return !isNullOrUndefined(this.data[this.getEndPoint()].item.errors[field])
    }
  }

  /**
   * Retorna os erros de validação do campo
   */
  getItemFieldErrors(field: any): any {
    if (this.data[this.getEndPoint()].item.errors) {
      return this.data[this.getEndPoint()].item.errors[field];
    }
    return [];
  }

  /**
   * Retorna configurações da Entidade
   */
  getItemConfig(): any {
    return this.data[this.getEndPoint()].item.config;
  }

  /**
   * Reinicia as propriedades de uma collection em data.{collection}
   */
  public resetDataCollection() {
    this.data[this.getEndPoint()].collection = this.getEntity().resetDataCollection();
    return this;
  }

  /**
   * Reinicia as propriedades de um item em data.{item}
   */
  public resetDataItem() {
    this.data[this.getEndPoint()].item = this.getEntity().resetDataItem();
    return this;
  }

  /**
   * Prepara a propriedade data.queryBuilder para requisição de uma Coleção
   */
  private prepareCollectionQuery() {
    Object.assign(this.data.queryBuilder, {
      include: this.data[this.getEndPoint()].entity.getCollectionTransformers()
    });
    return this;
  }

  /**
   * Retorna um QueryBuilder para requisição de um Item
   */
  getItemQueryBuilder(): QueryBuilder {
    return new QueryBuilder({
      endpoint: this.getEndPoint(),
      include: this.data[this.getEndPoint()].entity.getItemTransformers()
    });
  }

  /**
   * Retorna um QueryBuilder para requisição de uma Coleção
   */
  getCollectionQueryBuilder(): QueryBuilder {
    return new QueryBuilder({
      endpoint: this.getEndPoint(),
      include: this.data[this.getEndPoint()].entity.getCollectionTransformers()
    });
  }

  /**
   * Solicita a lista de registros à API
   */
  getCollection() {
    this.resetDataCollection();
    this.prepareCollectionQuery();
    this.setSearchParams();
    this.apiService
      .init(this.getCollectionQueryBuilder())
      .list(this.data.searchParams)
      .then((res) => {
        this.setDataApiResponse(res);
        Object.assign(this.data[this.getEndPoint()].collection, res);
        this.debug();
      })
      .catch((error) => {
        this.logger.error(error)
      });
    return this;
  }

  /**
   * Solicita um registro específico à API
   *
   * @param id: any
   */
  getItem(id: any) {
    this.apiService
      .init(this.getItemQueryBuilder())
      .show(id)
      .then((res) => {
        this.setDataApiResponse(res);
        this.resetDataItem();
        Object.assign(this.data[this.getEndPoint()].item, res);
        this.debug();
      })
      .catch((error) => {
        this.logger.error(error)
      });
    return this;
  }

  /**
   * Salva registro na API
   *
   * @param item
   */
  saveItem(item?: SearchableEntityDataInterface) {
    if (!item) {
      item = this.getItemData();
    }
    this.apiService
      .init(this.getItemQueryBuilder())
      .post(item)
      .then((res) => {
        this.setDataApiResponse(res);
        Object.assign(this.data[this.getEndPoint()].item, res);
        this.checkIfRedirect('create');
        this.notifyFromApiResponse(res);
        this.debug();
      })
      .catch((error) => {
        this.logger.error(error)
      });
    return this;
  }

  /**
   * Atualiza um registro específico na API
   *
   * @param id
   * @param item
   */
  updateItem(id?: any, item?: SearchableEntityDataInterface) {
    if (!item) {
      item = this.getItemData();
    }
    this.apiService
      .init(this.getItemQueryBuilder())
      .update(item.id, item)
      .then((res) => {
        this.setDataApiResponse(res);
        Object.assign(this.data[this.getEndPoint()].item, res);
        this.checkIfRedirect('update');
        this.notifyFromApiResponse(res);
      })
      .catch((error) => {
        this.logger.error(error)
      });
    return this;
  }

  /**
   * Deleta um registro específico na API
   *
   * @param id: any
   */
  removeItem(id: any) {
    this.apiService
      .init(this.getItemQueryBuilder())
      .remove(id)
      .then((res) => {
        this.setDataApiResponse(res);
        this.resetDataItem();
        this.checkIfRedirect('delete');
        this.getCollection();
        this.notifyFromApiResponse(res);
        this.debug();
      })
      .catch((error) => {
        this.logger.error(error)
      });
    return this;
  }

  /**
   * Restaura um registro específico na API
   *
   * @param id: any
   */
  restoreItem(id: any) {
    this.apiService
      .init(this.getItemQueryBuilder())
      .restore(id)
      .then((res) => {
        this.setDataApiResponse(res);
        this.getItem(id);
        this.getCollection();
        this.notifyFromApiResponse(res);
        this.checkIfRedirect('restore', res);
        this.debug();
      })
      .catch((error) => {
        this.logger.error(error)
      });
    return this;
  }

  /**
   * Deleta um registro específico permanentemente na API
   *
   * @param id: any
   */
  forceRemoveItem(id: any) {
    this.apiService
      .init(this.getItemQueryBuilder())
      .forceRemove(id)
      .then((res) => {
        this.setDataApiResponse(res);
        this.resetDataItem();
        this.toggleTrashedByCollectionDataLength();
        this.getCollection();
        this.notifyFromApiResponse(res);
        this.checkIfRedirect('force_delete');
        this.debug();
      })
      .catch((error) => {
        this.logger.error(error)
      });
    return this;
  }

  /**
   * Atualiza this.data.apiResponse a partir da resposta da API
   *
   * @param res
   */
  setDataApiResponse(res: ApiResponseInterface) {
    Object.assign(this.apiResponse, res);
    return this;
  }

  /**
   * Atualiza this.data.{endpoint}.item a partir da resposta da API
   *
   * @param res
   */
  private notifyFromApiResponse(res: ApiResponseInterface) {
    if (res.errors) {
      this.notificationService.showError(res.message);
    } else {
      this.notificationService.showSuccess(res.message);
    }
    this.debug();
  }

  /**
   * Verifica se será feito redirecionamento de rota após operações crud
   */
  checkIfRedirect(operation: any, res?: ApiResponseInterface) {
    if (this.config.system.app.crud.redirect[operation]) {
      if (operation === 'restore') {
        this.navigateToRoute(['/', this.getEndPoint(), this.getItemData().id]);
      }
      this.navigateToRoute(['/', this.getEndPoint()]);
    }
  }
}
