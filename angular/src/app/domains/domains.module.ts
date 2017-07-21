import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Medicamento } from './medicamentos/medicamento.model';
import { Historico } from './medicamentos/historico.model';
import { User } from './users/user.model';
import { Page } from './pages/page.model';
import { Activity } from './activities/activity.model';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [

  ],
  declarations: [

  ],
  providers: [
    Medicamento,
    Historico,
    User,
    Page,
    Activity
  ]
})
export class DomainsModule { }
