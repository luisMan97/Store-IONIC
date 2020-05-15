import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MybuysPage } from './mybuys.page';

const routes: Routes = [
  {
    path: '',
    component: MybuysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MybuysPageRoutingModule {}
