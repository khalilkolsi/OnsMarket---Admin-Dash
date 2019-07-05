import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CreatePromtionComponent } from './create-promotion.component';
import { CurrentPromotionComponent } from './current-promotion.component';
import { PromotionRoutingModule } from './promotion-routing.module';

@NgModule({
  imports: [
    FormsModule,
    PromotionRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [ CreatePromtionComponent, CurrentPromotionComponent ]
})

export class PromotionModule { }
