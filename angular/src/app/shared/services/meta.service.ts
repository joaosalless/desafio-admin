import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Page } from '../../domains/pages/page.model';
import { AbstractService } from "app/shared/services/abstract-service";
import { ConfigService } from '@ngx-config/core';

@Injectable()
export class MetaService extends AbstractService {

  protected config: any;

  constructor(protected readonly configService: ConfigService,
              protected titleService: Title,
              protected metaService: Meta) {
    super(configService);
  }

  setMetaFromPage(page: Page) {
    // Set page title
    this.titleService.setTitle(`${page.title} - ${this.configService.getSettings('system.app.name')}`);
  }

}
