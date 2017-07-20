import { Component, Input, OnInit } from '@angular/core';
import { PreloaderService } from '../../../../shared/components/preloader/preloader.service';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../../../shared/services/data/data.service';
import { ConfigService } from '@ngx-config/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicamento-list-table',
  templateUrl: './medicamento-list-table.component.html',
  styleUrls: ['./medicamento-list-table.component.scss']
})
export class MedicamentoListTableComponent implements OnInit {

  @Input() collection: any;

  constructor(protected readonly configService: ConfigService,
              protected readonly translate: TranslateService,
              public dataService: DataService,
              protected preloaderService: PreloaderService,
              protected route: ActivatedRoute,
              protected router: Router) {
  }

  ngOnInit() {

  }

  editItem(id) {
    this.dataService.getItem(id);
    this.router.navigate(['/medicamentos', id])
    this.dataService.setView('edit');
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
