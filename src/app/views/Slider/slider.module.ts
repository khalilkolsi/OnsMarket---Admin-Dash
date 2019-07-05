import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SliderComponent } from './slider.component';
import { SliderRoutingModule } from './slider-routing.module';

@NgModule({
  imports: [
    FormsModule,
    SliderRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ SliderComponent ]
})

export class SliderModule { }
