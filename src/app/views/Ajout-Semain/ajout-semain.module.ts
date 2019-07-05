import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AjoutSemainComponent } from './ajout-semain.component';
import { AjoutFormComponent } from './ajout-form.component';
import { AjoutSemainRoutingModule } from './ajout-semain-routing.module';

@NgModule({
  imports: [
    FormsModule,
    AjoutSemainRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [ AjoutSemainComponent, AjoutFormComponent ]
})

export class AjoutSemainModule { }
