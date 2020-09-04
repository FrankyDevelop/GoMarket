import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabReservasPage } from './tab-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: TabReservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabReservasPageRoutingModule {}
