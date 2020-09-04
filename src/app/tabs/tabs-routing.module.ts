import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab-reservas',
        loadChildren: () => import('../reservas/tab-reservas/tab-reservas.module').then( m => m.TabReservasPageModule)
      },
      {
        path: 'tab-presupuesto',
        loadChildren: () => import('../presupuesto/tab-presupuesto/tab-presupuesto.module').then( m => m.TabPresupuestoPageModule)
      },
      {
        path: 'perfil-cliente',
        loadChildren: () => import('../perfil-cliente/perfil-cliente.module').then(m => m.PerfilClientePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
