import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentoEditComponent } from './medicamento-edit/medicamento-edit.component';
import { MedicamentoListComponent } from './medicamento-list/medicamento-list.component';
import { MedicamentoCreateComponent } from './medicamento-create/medicamento-create.component';

const medicamentosRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MedicamentoListComponent,
  },
  {
    path: 'cadastrar',
    pathMatch: 'prefix',
    component: MedicamentoCreateComponent
  },
  {
    path: ':id',
    pathMatch: 'prefix',
    component: MedicamentoEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(medicamentosRoutes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
