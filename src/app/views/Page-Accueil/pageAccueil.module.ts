import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { PageAccueilComponent } from './pageAccueil.component';
import { PageAccueilRoutingModule } from './pageAccueil-routing.module';

@NgModule({
  imports: [
    FormsModule,
    PageAccueilRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ PageAccueilComponent ]
})

export class PageAccueilModule { }
