import { Injectable } from '@angular/core';
import { ConfigService } from '@ngx-config/core';

@Injectable()
export abstract class AbstractService {

  protected config: any;

  constructor(protected readonly configService: ConfigService,) {
    this.config = this.configService.getSettings();
  }

}
