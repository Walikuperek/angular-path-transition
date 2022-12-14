import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoAnimViewRoutingModule } from './no-anim-view-routing.module';
import { NoAnimViewComponent } from './no-anim-view.component';


@NgModule({
  declarations: [
    NoAnimViewComponent
  ],
  imports: [
    CommonModule,
    NoAnimViewRoutingModule
  ]
})
export class NoAnimViewModule { }
