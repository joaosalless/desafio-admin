import { ConfigService } from '@ngx-config/core';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Page } from '../../../domains/pages/page.model';
import { QueryBuilder } from '../../../domains/abstract/query-builder';
import { DataService } from '../../../shared/services/data/data.service';
import { PreloaderService } from "app/shared/components/preloader/preloader.service";

@Component({
  selector: 'app-medicamento-edit',
  templateUrl: './medicamento-edit.component.html',
  styleUrls: ['./medicamento-edit.component.scss'],
  providers: [DataService]
})
export class MedicamentoEditComponent implements OnInit {

  public data: any;
  public config: any;

  constructor(protected readonly configService: ConfigService,
              protected readonly translate: TranslateService,
              public dataService: DataService,
              protected preloaderService: PreloaderService,
              protected route: ActivatedRoute,
              protected router: Router) {
  }

  ngOnInit() {
    this.data = this.dataService.data;
    this.config = this.configService.getSettings();
    this.dataService.setQueryBuilder(new QueryBuilder({ endpoint: this.data.medicamentos.entity.getApiEndpoint() }));
    this.dataService.startApi(this.data.medicamentos.entity.getApiEndpoint());
    this.dataService.setPage(new Page({
      slug: 'medicamentos-edit',
      title: 'Editando Apresentações Alopáticos',
    }));
    this.route.params
      .subscribe((params: any) => {
        this.dataService.getItem(params.id);
      });
    window.scrollTo(0, 0);
    this.dataService.debug();
  }

  cancel() {
    this.router.navigate(['/medicamentos']);
  }

  save() {
    let item = this.data.medicamentos.item.data;
    let entity = this.data.medicamentos.item.entity;
    this.dataService.updateItem(item.id, {
      nome: item.nome,
      ggeem: item.ggeem,
    });
  }

  toggleShowhowHistory() {
    this.data.medicamentos.item.showHistory = (this.data.medicamentos.item.showHistory !== true);
  }

}
