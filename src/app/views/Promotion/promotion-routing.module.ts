import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePromtionComponent } from './create-promotion.component';
import { CurrentPromotionComponent } from './current-promotion.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreatePromtionComponent,
    data: {
      title: 'Promotion  /  Créer une Promotion'
    }
  },

  {
    path: 'current',
    component: CurrentPromotionComponent,
    data: {
      title: 'Promotion  /  Promotions Actuelles'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule {}
