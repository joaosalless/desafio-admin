import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data/data.service';

@Component({
  selector: 'app-medicamento-form',
  templateUrl: './medicamento-form.component.html',
  styleUrls: ['./medicamento-form.component.scss']
})
export class MedicamentoFormComponent implements OnInit {

  @Input() item: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
