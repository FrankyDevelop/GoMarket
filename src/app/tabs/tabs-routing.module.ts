import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-categoria',
        loadChildren: () => import('../productos/tab-categoria/tab-categoria.module').then(m => m.TabCategoriaPageModule)
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
        path: 'tab-perfil',
        loadChildren: () => import('../perfil/tab-perfil/tab-perfil.module').then(m => m.TabPerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab-categoria',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-categoria',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
