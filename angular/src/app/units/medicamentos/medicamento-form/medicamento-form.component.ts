import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicamento-form',
  templateUrl: './medicamento-form.component.html',
  styleUrls: ['./medicamento-form.component.scss']
})
export class MedicamentoFormComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
