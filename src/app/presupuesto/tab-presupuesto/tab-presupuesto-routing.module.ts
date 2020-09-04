import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPresupuestoPage } from './tab-presupuesto.page';

const routes: Routes = [
  {
    path: '',
    component: TabPresupuestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPresupuestoPageRoutingModule {}
