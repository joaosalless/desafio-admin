import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { isNullOrUndefined } from 'util';

import { ConfigService } from '@ngx-config/core';
import { QueryBuilder } from '../../../domains/abstract/query-builder';
import { HttpRequestOptionsService } from './http-request-options.service';

@Injectable()
export class HttpService {

  private url: string;
  private relations: string;
  private config: any;

  constructor(private readonly configService: ConfigService,
              private http: Http,
              private requestOptions: HttpRequestOptionsService) {
    this.config = this.configService.getSettings();
  }

  init(queryBuilder: QueryBuilder) {
    if (!isNullOrUndefined(queryBuilder.endpoint)) {
      this.builder(queryBuilder.endpoint);
    }

    if (queryBuilder.include.length > 0) {
      this.include(queryBuilder.include);
    }
    return this;
  }

  getApiUrl() {
    return this.config.system.api.url;
  }

  builder(resource: string, fullUrl: boolean = false) {
    this.url = fullUrl ? `${resource}`
      : `${this.getApiUrl()}/${resource}`;
    return this;
  }

  include(relations: any[]) {
    this.relations = `?include=${relations.join()}`;
    return this;
  }

  list(params?: URLSearchParams) {
    let url = this.url;
    return this.http.get(url + '/?' + params.toString())
      .toPromise()
      .then((res) => {
        return res.json() || {};
      });
  }

  show(id: string, params?: URLSearchParams) {
    let relations = this.relations ? this.relations : '';
    let url = `${this.url}/${id}/${relations}`;
    return this.http.get(url, this.requestOptions.merge(new RequestOptions()))
      .toPromise()
      .then((res) => {
        return res.json() || {};
      });
  }

  update(id: any, data: any) {
    let relations = this.relations ? this.relations : '';
    let url = `${this.url}/${id}/${relations}`;
    return this.http.put(url, data, this.requestOptions.merge(new RequestOptions()))
      .toPromise()
      .then((res) => {
        return res.json() || {};
      });
  }

  post(data: any) {
    let relations = this.relations ? this.relations : '';
    let url = `${this.url}/${relations}`;
    return this.http.post(url, data, this.requestOptions.merge(new RequestOptions()))
      .toPromise()
      .then((res) => {
        return res.json() || {};
      });
    ;
  }

  remove(id: number) {
    let relations = this.relations ? this.relations : '';
    let url = `${this.url}/${id}/${relations}`;
    return this.http.delete(url, this.requestOptions.merge(new RequestOptions()))
      .toPromise()
      .then((res) => {
        return res.json() || {};
      });
  }

  restore(id: number) {
    let relations = this.relations ? this.relations : '';
    let url = `${this.url}/${id}/restore/${relations}`;
    return this.http.get(url, this.requestOptions.merge(new RequestOptions()))
      .toPromise()
      .then((res) => {
        return res.json() || {};
      });
  }

  forceRemove(id: number) {
    let url = `${this.url}/${id}/force_delete`;
    return this.http.get(url, this.requestOptions.merge(new RequestOptions()))
      .toPromise()
      .then((res) => {
        return res.json() || {};
      });
  }

}
