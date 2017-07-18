import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';
import { ConfigLoader, ConfigModule } from '@ngx-config/core';
import { ConfigHttpLoader } from '@ngx-config/http-loader';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LoggerModule } from './shared/services/logger/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Config
export function configFactory(http: Http): ConfigLoader {
  return new ConfigHttpLoader(http, './assets/config.json');
}

// Translation Loader
export function translateLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DECLARATIONS_APP_MODULE = [
  AppComponent,
];

@NgModule({
  declarations: [
    ...DECLARATIONS_APP_MODULE,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: (configFactory),
      deps: [Http]
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (translateLoaderFactory),
        deps: [Http]
      }
    }),
    LoggerModule.forRoot(null),
  ],
  exports: [
    ...DECLARATIONS_APP_MODULE,
    TranslateModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
