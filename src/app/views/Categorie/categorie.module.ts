import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CategorieComponent } from './categorie.component';
import { CategorieRoutingModule } from './categorie-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CategorieRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [ CategorieComponent ]
})

export class CategorieModule { }
