import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ANIMATED_VIEW} from './animations/enums';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
    data: {
      animation: ANIMATED_VIEW.HOME_PAGE
    }
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module')
      .then(m => m.SearchModule),
    data: {
      animation: ANIMATED_VIEW.SEARCH_PAGE
    }
  },
  {
    path: 'no-anim',
    loadChildren: () => import('./no-anim-view/no-anim-view.module')
      .then(m => m.NoAnimViewModule),
    data: {
      animation: 'NoAnimPage'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
