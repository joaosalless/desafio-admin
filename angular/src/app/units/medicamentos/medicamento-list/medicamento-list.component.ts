import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ConfigService } from '@ngx-config/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../../../shared/services/data/data.service';
import { PreloaderService } from '../../../shared/components/preloader/preloader.service';
import { ToastsManager } from 'ng2-toastr';
import { Page } from '../../../domains/pages/page.model';

@Component({
  selector: 'app-medicamento-list',
  templateUrl: './medicamento-list.component.html',
  styleUrls: ['./medicamento-list.component.scss'],
})
export class MedicamentoListComponent implements OnInit {

  protected data: any;
  protected config: any;

  constructor(public readonly configService: ConfigService,
              public dataService: DataService,
              public vcr: ViewContainerRef,
              public toastr: ToastsManager,
              protected preloaderService: PreloaderService,
              protected route: ActivatedRoute,
              protected router: Router) {
    this.toastr.setRootViewContainerRef(vcr)
  }

  ngOnInit() {
    this.toastr.setRootViewContainerRef(this.vcr);
    this.data = this.dataService.data;
    this.config = this.configService.getSettings();
    this.dataService.startApi('medicamentos');
    this.dataService.setPage(new Page({
      slug: 'medicamentos',
      title: 'Apresentações Alopáticos',
    }));
    this.dataService.setSearchParams();
    this.dataService.getCollection();
    window.scrollTo(0, 0);
  }

  createItem(){
    this.dataService.navigateToRoute(['/medicamentos/cadastrar'])
  }

}
