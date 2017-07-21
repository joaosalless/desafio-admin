import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Page } from '../../../domains/pages/page.model';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../../shared/services/data/data.service';
import { ToastsManager } from 'ng2-toastr';
import { PreloaderService } from '../../../shared/components/preloader/preloader.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicamento-create',
  templateUrl: './medicamento-create.component.html',
  styleUrls: ['./medicamento-create.component.scss']
})
export class MedicamentoCreateComponent implements OnInit {

  /**
   * Medicamento selecionado para edição
   */
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
    this.dataService.startApi('medicamentos');
    this.item = this.dataService.data.medicamentos.item;
    this.dataService.setPage(new Page({
      slug: 'medicamentos-create',
      title: 'Criando Apresentações Alopáticos',
    }));
    window.scrollTo(0, 0);
    this.dataService.debug();
  }

  /**
   * Salva o item na API
   */
  saveItem() {
    this.dataService.saveItem();
    this.router.navigate(['/medicamentos'])
  }

}
