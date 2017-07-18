import { Component, Input, OnInit } from '@angular/core';
import { PreloaderService } from '../../../../shared/components/preloader/preloader.service';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../../../shared/services/data/data.service';
import { ConfigService } from '@ngx-config/core';

@Component({
  selector: 'app-medicamento-list-table',
  templateUrl: './medicamento-list-table.component.html',
  styleUrls: ['./medicamento-list-table.component.scss']
})
export class MedicamentoListTableComponent implements OnInit {

  @Input() collection: any;

  data: any;

  constructor(protected readonly configService: ConfigService,
              protected readonly translate: TranslateService,
              public dataService: DataService,
              protected preloaderService: PreloaderService) {
  }

  ngOnInit() {
    this.data = this.dataService.data;
  }

  saveItem() {
    this.dataService.saveItem();
    this.dataService.getCollection();
  }

  removeItem(id: any) {
    this.dataService.removeItem(id);
    this.dataService.getCollection();
  }

  forceRemoveItem(id: any) {
    this.dataService.forceRemoveItem(id);
    this.dataService.getCollection();
  }

  restoreItem(id: any) {
    this.dataService.restoreItem(id);
    this.dataService.getCollection();
  }

}
