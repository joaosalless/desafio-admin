import { Injectable } from '@angular/core';
import { RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { JwtTokenService } from '../jwt-token.service';

@Injectable()
export class HttpRequestOptionsService extends RequestOptions {

  constructor(private jwtToken: JwtTokenService) {
    super();
  }

  merge(options?: RequestOptionsArgs): RequestOptions {
    const headers = options.headers || new Headers();
    headers.set('Authorization', `Bearer ${this.jwtToken.token}`);
    headers.set('Content-Type', 'application/json');
    options.headers = headers;
    return super.merge(options);
  }
}
