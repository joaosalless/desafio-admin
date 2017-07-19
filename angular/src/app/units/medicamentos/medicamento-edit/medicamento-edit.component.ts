import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Page } from '../../../domains/pages/page.model';
import { DataService } from '../../../shared/services/data/data.service';
import { PreloaderService } from "app/shared/components/preloader/preloader.service";
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-medicamento-edit',
  templateUrl: './medicamento-edit.component.html',
  styleUrls: ['./medicamento-edit.component.scss'],
  providers: [DataService]
})
export class MedicamentoEditComponent implements OnInit {

  /**
   * Configurações globais
   */
  public config: any = {};

  /**
   * Dados globais
   */
  public data: any = {};

  item: any;

  /**
   *
   * @param translate
   * @param dataService
   * @param vcr
   * @param toastr
   * @param preloaderService
   * @param route
   * @param router
   */
  constructor(protected readonly translate: TranslateService,
              public dataService: DataService,
              public vcr: ViewContainerRef,
              public toastr: ToastsManager,
              protected preloaderService: PreloaderService,
              protected route: ActivatedRoute,
              protected router: Router) {
    this.toastr.setRootViewContainerRef(vcr)
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
      });
    window.scrollTo(0, 0);
    this.dataService.debug();
  }

  /**
   * onChange
   */
  onChange(form) {
    console.log(form.value);
  }

  /**
   * Cancela a edição e retorna para a coleção de itens
   */
  cancel() {
    this.router.navigate(['/medicamentos']);
  }

  onSubmit(form) {
    event.preventDefault();
    console.log(form.value);
    this.dataService.updateItem();
  }

  removeItem(id: any) {
    this.dataService.removeItem(id);
  }

  forceRemoveItem(id: any) {
    this.dataService.forceRemoveItem(id);
  }

  restoreItem(id: any) {
    this.dataService.restoreItem(id);
  }

}
