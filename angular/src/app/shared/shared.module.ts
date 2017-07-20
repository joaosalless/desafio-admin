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
import { CampoControlErroComponent } from './components/campo-control-erro/campo-control-erro.component';
import { MetaService } from "app/shared/services/meta.service";
import { PaginationComponent } from './components/pagination/pagination.component';
import { PreloaderHttpInterceptor } from './components/preloader/preloader.http-interceptor';
import { PreloaderService } from './components/preloader/preloader.service';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { DataService } from './services/data/data.service';
import { NotificationModule } from './components/notification/notification.module';
import { NotificationService } from './components/notification/notification.service';
import { SearchableEntityFilterService } from './services/data/searchable-entity-filter.service';
import { DataEntityServiceLocatorService } from './services/data/data-entity-service-locator.service';
import { DebugDataComponent } from './components/debug/debug-data/debug-data.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

const DECLARATIONS_SHARED_MODULE = [
  CampoControlErroComponent,
  DebugDataComponent,
  PaginationComponent,
  PreloaderComponent,
  StrReplacePipe,
  PageTitleComponent,
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
    DataEntityServiceLocatorService,
    NotificationService,
    SearchableEntityFilterService,
    { provide: Http, useClass: PreloaderHttpInterceptor },
  ],
})
export class SharedModule {
}
