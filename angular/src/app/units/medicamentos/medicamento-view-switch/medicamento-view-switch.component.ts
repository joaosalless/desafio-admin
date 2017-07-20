import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DataService } from '../../../shared/services/data/data.service';
import { ConfigService } from '@ngx-config/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-medicamento-view-switch',
  templateUrl: './medicamento-view-switch.component.html',
  styleUrls: ['./medicamento-view-switch.component.scss']
})
export class MedicamentoViewSwitchComponent implements OnInit {

  protected view: any;
  protected data: any;
  protected config: any;

  constructor(public readonly configService: ConfigService,
              public dataService: DataService,
              public vcr: ViewContainerRef,
              public toastr: ToastsManager) {
    this.toastr.setRootViewContainerRef(vcr)
  }

  ngOnInit() {
    this.view = this.dataService.data.view;
    this.data = this.dataService.data;
    this.config = this.configService.getSettings();
    this.dataService.startApi('medicamentos');
    this.dataService.setSearchParams();
    this.dataService.getCollection();
    window.scrollTo(0, 0);
  }

}
