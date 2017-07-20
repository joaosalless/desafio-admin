import { Injectable } from '@angular/core';
import { Request, Response, XHRBackend, RequestOptions, RequestOptionsArgs, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { PreloaderService } from './preloader.service';

@Injectable()
export class PreloaderHttpInterceptor extends Http {
    constructor(backend: XHRBackend,
                defaultOptions: RequestOptions,
                public preloaderService: PreloaderService) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        this.preloaderService.showPreloader();
        return observable
            .finally(() => {
                var timer = Observable.timer(600);
                timer.subscribe(t => {
                    this.preloaderService.hidePreloader();
                });
            });
    }
}
