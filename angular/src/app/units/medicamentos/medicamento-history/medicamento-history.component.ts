import { Component, Input, OnInit } from '@angular/core';
import { Medicamento } from '../../../domains/medicamentos/medicamento.model';

@Component({
  selector: 'app-medicamento-history',
  templateUrl: './medicamento-history.component.html',
  styleUrls: ['./medicamento-history.component.scss']
})
export class MedicamentoHistoryComponent implements OnInit {

  @Input() item: Medicamento;

  constructor() { }

  ngOnInit() {
  }

}
