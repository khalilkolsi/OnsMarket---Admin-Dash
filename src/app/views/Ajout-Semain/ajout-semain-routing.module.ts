import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutSemainComponent } from './ajout-semain.component';
import { AjoutFormComponent } from './ajout-form.component';

const routes: Routes = [
  {
    path: '',
    component: AjoutSemainComponent,
    data: {
      title: 'Ajout de la Semaine'
    },
    children: [
      {
        path: '',
        component: AjoutFormComponent,
        data: {
          title: 'Ajouter un Article'
        }
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutSemainRoutingModule {}
