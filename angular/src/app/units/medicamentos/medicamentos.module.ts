import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { MedicamentoEditComponent } from './medicamento-edit/medicamento-edit.component';
import { MedicamentoListComponent } from './medicamento-list/medicamento-list.component';
import { MedicamentoFormComponent } from './medicamento-form/medicamento-form.component';
import { MedicamentoHistoryComponent } from './medicamento-history/medicamento-history.component';
import { MedicamentoSearchFilterService } from './medicamento-list/medicamento-search-filter.service';
import { MedicamentoListTableComponent } from './medicamento-list/medicamento-list-table/medicamento-list-table.component';
import { MedicamentoCreateComponent } from './medicamento-create/medicamento-create.component';

const DECLARATIONS_MEDICAMENTOS = [
  MedicamentoListComponent,
  MedicamentoCreateComponent,
  MedicamentoEditComponent,
  MedicamentoFormComponent,
  MedicamentoHistoryComponent,
  MedicamentoListTableComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MedicamentosRoutingModule,
    SharedModule,
  ],
  declarations: [
    ...DECLARATIONS_MEDICAMENTOS,
  ],
  exports: [
    ...DECLARATIONS_MEDICAMENTOS,
  ],
  providers: [
    MedicamentoSearchFilterService,
  ]
})
export class MedicamentosModule {
}
