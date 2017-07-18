import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ConfigService } from '@ngx-config/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MetaService } from '../../../shared/services/meta.service';
import { QueryBuilder } from '../../../domains/abstract/query-builder';
import { DataService } from '../../../shared/services/data/data.service';
import { PreloaderService } from '../../../shared/components/preloader/preloader.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-medicamento-list',
  templateUrl: './medicamento-list.component.html',
  styleUrls: ['./medicamento-list.component.scss'],
})
export class MedicamentoListComponent implements OnInit {

  protected data: any;
  protected config: any;

  constructor(protected readonly configService: ConfigService,
              protected readonly translate: TranslateService,
              public dataService: DataService,
              public vcr: ViewContainerRef,
              public toastr: ToastsManager,
              protected preloaderService: PreloaderService,
              protected metaService: MetaService,
              protected route: ActivatedRoute,
              protected router: Router) {
    this.toastr.setRootViewContainerRef(vcr)
  }

  ngOnInit() {
    this.data = this.dataService.data;
    this.config = this.configService.getSettings();
    this.dataService.setQueryBuilder(new QueryBuilder({ endpoint: this.data.medicamentos.entity.getApiEndpoint() }));
    this.dataService.startApi(this.data.medicamentos.entity.getApiEndpoint());
    this.metaService.setMetaFromPage(this.data.page);
    this.dataService.setSearchParams();
    this.dataService.getCollection();
    window.scrollTo(0, 0);
    this.dataService.debug();
  }

}
