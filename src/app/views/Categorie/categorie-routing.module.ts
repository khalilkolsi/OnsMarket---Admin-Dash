import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieComponent } from './categorie.component';

const routes: Routes = [
  {
    path: '',
    component: CategorieComponent,
    data: {
      title: 'Categorie'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule {}
