import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
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
export class MedicamentoEditComponent implements OnInit, OnDestroy {

  /**
   * Configurações globais
   */
  public config: any = {};

  /**
   * Dados globais
   */
  public data: any = {};

  id: any;
  sub: any;
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
    this.sub  = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.route.params
      .subscribe((params: any) => {
        this.config = this.dataService.config;
        this.dataService.startApi('medicamentos');
        this.item = this.dataService.data.medicamentos.item.data;
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Cancela a edição e retorna para a coleção de itens
   */
  cancel() {
    this.dataService.setView('list');
    this.router.navigate(['/medicamentos']);
  }

  updateItem() {
    this.dataService.updateItem();
    this.dataService.setView('list');
    // this.dataService.updateItem(this.data.medicamentos.item.data.deleted_at);
    // this.router.navigate(['/medicamentos']);
    // this.dataService.notificationService.showSuccess('Registro atualizado com sucesso.');
  }

  restoreItem(){
    this.dataService.restoreItem(this.data.medicamentos.item.data.id);
    this.router.navigate(['/medicamentos']);
    this.dataService.setView('list');
  }

}
