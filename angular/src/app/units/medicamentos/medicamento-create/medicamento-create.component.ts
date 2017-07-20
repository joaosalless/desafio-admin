import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../../shared/services/data/data.service';
import { ToastsManager } from 'ng2-toastr';
import { PreloaderService } from '../../../shared/components/preloader/preloader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../../domains/pages/page.model';
import { QueryBuilder } from '../../../domains/abstract/query-builder';
import { Medicamento } from '../../../domains/medicamentos/medicamento.model';

@Component({
  selector: 'app-medicamento-create',
  templateUrl: './medicamento-create.component.html',
  styleUrls: ['./medicamento-create.component.scss']
})
export class MedicamentoCreateComponent implements OnInit {

  view: any = '';
  config: any = {};

  data: any = {};

  item: Medicamento = new Medicamento();

  /**
   *
   * @param translate
   * @param dataService
   * @param toastr
   * @param preloaderService
   * @param route
   * @param router
   */
  constructor(protected readonly translate: TranslateService,
              public dataService: DataService,
              public toastr: ToastsManager,
              protected preloaderService: PreloaderService,
              protected route: ActivatedRoute,
              protected router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: any) => {
        this.config = this.dataService.config;
        this.dataService.startApi('medicamentos');
        this.item = this.dataService.data.medicamentos.item;
        this.dataService.setPage(new Page({
          slug: 'medicamentos-edit',
          title: 'Editando Apresentações Alopáticos',
        }));
        this.dataService.getItem(params.id);
        this.data = this.dataService.data;
        if (params.id) {
          this.dataService.setView('edit');
        }
      });
    window.scrollTo(0, 0);
  }

  onChange(form) {
    // console.log(form.value);
  }

  cancel() {
    console.log('canceled');
    this.dataService.setView('list');
  }

  onSubmit(form) {
    this.dataService.saveItem();
  }

}
