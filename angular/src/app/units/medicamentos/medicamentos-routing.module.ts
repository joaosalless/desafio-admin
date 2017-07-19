import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentoEditComponent } from './medicamento-edit/medicamento-edit.component';
import { MedicamentoListComponent } from './medicamento-list/medicamento-list.component';
import { MedicamentoCreateComponent } from './medicamento-create/medicamento-create.component';

const medicamentosRoutes: Routes = [
  {
    path: ':id',
    pathMatch: 'prefix',
    component: MedicamentoEditComponent
  },
  {
    path: '/cadastrar',
    pathMatch: 'full',
    component: MedicamentoCreateComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: MedicamentoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(medicamentosRoutes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
