import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'medicamentos',
        loadChildren: 'app/units/medicamentos/medicamentos.module#MedicamentosModule'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'medicamentos'
      },
    ]
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
