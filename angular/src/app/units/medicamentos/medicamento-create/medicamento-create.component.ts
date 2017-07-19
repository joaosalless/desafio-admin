import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../../shared/services/data/data.service';
import { ToastsManager } from 'ng2-toastr';
import { PreloaderService } from '../../../shared/components/preloader/preloader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../../domains/pages/page.model';

@Component({
  selector: 'app-medicamento-create',
  templateUrl: './medicamento-create.component.html',
  styleUrls: ['./medicamento-create.component.scss']
})
export class MedicamentoCreateComponent implements OnInit {

  /**
   * Configurações globais
   */
  public config: any = {};

  /**
   * Dados globais
   */
  public data: any;

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
    this.data = this.dataService.data;
    this.config = this.dataService.config;
    this.dataService.startApi('medicamentos');
    this.dataService.resetDataItem();
    this.dataService.setPage(new Page({
      slug: 'medicamentos-create',
      title: 'Criando Apresentações Alopáticos',
    }));
    window.scrollTo(0, 0);
    this.dataService.debug();
  }

  /**
   * Cancela a edição e retorna para a coleção de itens
   */
  cancel() {
    this.router.navigate(['/medicamentos']);
  }

}
