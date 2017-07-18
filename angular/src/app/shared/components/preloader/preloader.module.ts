import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import { PreloaderComponent } from './preloader.component';
import { PreloaderService } from './preloader.service';
import { PreloaderHttpInterceptor } from './preloader.http-interceptor';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
    ],
    declarations: [
        PreloaderComponent,
    ],
    exports: [
        PreloaderComponent,
    ],
    providers: [
        PreloaderService,
        { provide: Http, useClass: PreloaderHttpInterceptor }
    ]
})

export class PreloaderModule {
}
