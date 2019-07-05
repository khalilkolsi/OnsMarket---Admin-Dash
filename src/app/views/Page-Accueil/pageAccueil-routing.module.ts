import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAccueilComponent } from './pageAccueil.component';

const routes: Routes = [
  {
    path: '',
    component: PageAccueilComponent,
    data: {
      title: 'Page d\'Accueil'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAccueilRoutingModule {}
