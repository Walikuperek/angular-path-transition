import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAnimViewComponent } from './no-anim-view.component';

const routes: Routes = [{ path: '', component: NoAnimViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoAnimViewRoutingModule { }
