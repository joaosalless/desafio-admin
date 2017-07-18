import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService, LoggerConfig } from './logger.service';
export { LoggerService, LoggerConfig } from './logger.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class LoggerModule {
  static forRoot(config: LoggerConfig | null | undefined): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerConfig, useValue: config || {} },
        LoggerService
      ]
    };
  }
}
