import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/toPromise';

import { TranslateModule } from '@ngx-translate/core';
import { StrReplacePipe } from './pipes/str-replace.pipe';
import { HttpRequestOptionsService } from './services/http/http-request-options.service';
import { HttpService } from './services/http/http.service';
import { JwtTokenService } from './services/jwt-token.service';
import { LocalStorageService } from './services/local-storage.service';
import { FormDebugComponent } from './components/form-debug/form-debug.component';
import { CampoControlErroComponent } from './components/campo-control-erro/campo-control-erro.component';
import { MetaService } from "app/shared/services/meta.service";
import { PaginationComponent } from './components/pagination/pagination.component';
import { PreloaderHttpInterceptor } from './components/preloader/preloader.http-interceptor';
import { PreloaderService } from './components/preloader/preloader.service';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { DataService } from './services/data/data.service';
import { NotificationModule } from './components/notification/notification.module';
import { NotificationService } from './components/notification/notification.service';

const DECLARATIONS_SHARED_MODULE = [
  FormDebugComponent,
  CampoControlErroComponent,
  PaginationComponent,
  PreloaderComponent,
  StrReplacePipe,
];

const SHARED_ROUTES: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NotificationModule,
    RouterModule.forChild(SHARED_ROUTES),
    TranslateModule,
  ],
  declarations: [
    ...DECLARATIONS_SHARED_MODULE,
  ],
  exports: [
    ...DECLARATIONS_SHARED_MODULE,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NotificationModule,
  ],
  providers: [
    HttpRequestOptionsService,
    HttpService,
    JwtTokenService,
    LocalStorageService,
    MetaService,
    PreloaderService,
    DataService,
    NotificationService,
    { provide: Http, useClass: PreloaderHttpInterceptor },
  ],
})
export class SharedModule {
}
